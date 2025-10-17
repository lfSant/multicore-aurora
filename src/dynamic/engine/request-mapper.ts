import { dotGet } from './path-get';
import type { MapExpr, MappingConfig } from '../mapping-config';

const asBool = (v: any) => {
  if (v === true || v === 'true' || v === 1 || v === '1') return true;
  if (v === false || v === 'false' || v === 0 || v === '0') return false;
  return undefined;
};

/** Lee de raíz o de data./body. indistintamente */
function readPathFlexible(src: any, path: string): any {
  const v = dotGet(src, path);
  if (v !== undefined) return v;

  if (src && typeof src === 'object') {
    if ('data' in src) {
      const viaData1 = dotGet(src.data, path);
      if (viaData1 !== undefined) return viaData1;

      const viaData2 = dotGet(src, `data.${path}`);
      if (viaData2 !== undefined) return viaData2;
    }
    if ('body' in src) {
      const viaBody1 = dotGet(src.body, path);
      if (viaBody1 !== undefined) return viaBody1;

      const viaBody2 = dotGet(src, `body.${path}`);
      if (viaBody2 !== undefined) return viaBody2;
    }
  }
  return undefined;
}

function escapeRegexChar(ch: string) {
  return /[.*+?^${}()|[\]\\]/.test(ch) ? `\\${ch}` : ch;
}

/** Normaliza valores de fecha: recorta espacios, convierte -, . y espacios a "/" y colapsa múltiples "/" */
function normalizeDateValue(raw: string): string {
  return String(raw)
    .trim()
    .replace(/[-.\s]/g, '/')
    .replace(/\/{2,}/g, '/');
}

type Captures = Partial<{ d: string; dd: string; M: string; MM: string; yyyy: string }>;

/** Devuelve { re, order } para formatos tipo dd/MM/yyyy, d/M/yyyy, etc. */
function buildRegexAndOrder(fmt: string): { re: RegExp; order: string[] } {
  let pattern = '';
  const order: string[] = [];

  for (let i = 0; i < fmt.length;) {
    if (fmt.slice(i, 4) === 'yyyy') {
      pattern += '(\\d{4})';
      order.push('yyyy');
      i += 4;
      continue;
    }
    if (fmt.slice(i, 2) === 'dd') {
      pattern += '(\\d{2})';
      order.push('dd');
      i += 2;
      continue;
    }
    if (fmt.slice(i, 2) === 'MM') {
      pattern += '(\\d{2})';
      order.push('MM');
      i += 2;
      continue;
    }
    if (fmt[i] === 'd') {
      pattern += '(\\d{1,2})';
      order.push('d');
      i += 1;
      continue;
    }
    if (fmt[i] === 'M') {
      pattern += '(\\d{1,2})';
      order.push('M');
      i += 1;
      continue;
    }
    pattern += escapeRegexChar(fmt[i]);
    i += 1;
  }

  return { re: new RegExp(`^${pattern}$`), order };
}

/** Reformatea una fecha del formato inputFmt al outputFmt (tokens: yyyy, MM, M, dd, d) */
function simpleDateReformat(value: string, inputFmt: string, outputFmt: string): string | undefined {
  if (value == null) return undefined;

  const norm = normalizeDateValue(value);
  const { re, order } = buildRegexAndOrder(inputFmt);

  // Permitir espacios alrededor de "/": "18 / 10 / 2025"
  const tolerantPattern = re.source.replace(/\\\//g, '\\s*\\/\\s*');
  const tolerant = new RegExp(tolerantPattern);

  const m = norm.match(tolerant);
  if (!m) return undefined;

  const cap: Captures = {};
  for (let gi = 1; gi < m.length; gi++) {
    cap[order[gi - 1] as keyof Captures] = m[gi];
  }

  const dd   = cap.dd ?? (cap.d ? cap.d.padStart(2, '0') : undefined);
  const MM   = cap.MM ?? (cap.M ? cap.M.padStart(2, '0') : undefined);
  const yyyy = cap.yyyy;

  let out = outputFmt;
  if (yyyy != null) out = out.replace(/yyyy/g, yyyy);
  if (MM   != null) out = out.replace(/MM/g, MM);
  if (cap.M != null) out = out.replace(/\bM\b/g, cap.M);
  if (dd   != null) out = out.replace(/dd/g, dd);
  if (cap.d != null) out = out.replace(/\bd\b/g, cap.d);

  return out;
}

/** Evalúa una MapExpr contra el input estándar (con lectura flexible) */
function evalExpr(rule: MapExpr, input: any): any {
  if (rule == null) return undefined;

  // "a.b[0].c"
  if (typeof rule === 'string') {
    return readPathFlexible(input, rule);
  }

  // { from, default }
  if ('from' in rule && (rule as any).from) {
    const v = readPathFlexible(input, (rule as any).from as string);
    return v === undefined && 'default' in (rule as any) ? (rule as any).default : v;
  }

  // { const }
  if ('const' in rule) return (rule as any).const;

  // { template: "Hola {{user.name}}" }
  if ('template' in rule) {
    const tpl = (rule as any).template as string;
    return tpl.replace(/\{\{([^}]+)\}\}/g, (_m, p1) => {
      const val = readPathFlexible(input, String(p1).trim());
      return val == null ? '' : String(val);
    });
  }

  // { coalesce: ["path1","path2"], default? }
  if ('coalesce' in rule) {
    for (const p of (rule as any).coalesce as string[]) {
      const v = readPathFlexible(input, p);
      if (v != null) return v;
    }
    return (rule as any).default;
  }

  // { pickAnyBoolean: ["path1","path2"], optional?, default? }
  if ('pickAnyBoolean' in rule) {
    for (const p of (rule as any).pickAnyBoolean as string[]) {
      const b = asBool(readPathFlexible(input, p));
      if (typeof b === 'boolean') return b;
    }
    if ((rule as any).optional) return undefined;
    return (rule as any).default ?? false;
  }

  // { toNumber: { from, default? } }
  if ('toNumber' in rule) {
    const spec = (rule as any).toNumber as { from: string; default?: number };
    const v = readPathFlexible(input, spec.from);
    const n = Number(v);
    return Number.isFinite(n) ? n : spec.default;
  }

  // { toBoolean: { from } }
  if ('toBoolean' in rule) {
    const spec = (rule as any).toBoolean as { from: string };
    return asBool(readPathFlexible(input, spec.from));
  }

  // { toDateMs: { from, format?: 'iso'|'epochMs'|'epochSec', default? } }
  if ('toDateMs' in rule) {
    const spec = (rule as any).toDateMs as { from: string; format?: 'iso' | 'epochMs' | 'epochSec'; default?: number };
    const v = readPathFlexible(input, spec.from);
    if (v == null) return spec.default;
    const f = spec.format || 'iso';
    if (f === 'iso') {
      const t = Date.parse(String(v));
      return Number.isFinite(t) ? t : spec.default;
    }
    if (f === 'epochMs') return Number(v);
    if (f === 'epochSec') return Number(v) * 1000;
  }

  // { join: { of: (string|MapExpr)[], sep, default? } }
  if ('join' in rule) {
    const spec = (rule as any).join as { of: any[]; sep: string; default?: string };
    const parts = (spec.of || [])
      .map((it) =>
        (typeof it === 'string' ||
         (it && typeof it === 'object' && ('from' in it || 'const' in it || 'template' in it)))
          ? evalExpr(it as MapExpr, input)
          : readPathFlexible(input, it)
      )
      .filter((x) => x != null && String(x).trim() !== '');
    return parts.length ? parts.join(spec.sep) : (spec.default ?? '');
  }

  // { mapValue: { from, dict, default? } }
  if ('mapValue' in rule) {
    const spec = (rule as any).mapValue as { from: string; dict?: Record<string, any>; default?: any };
    const v = readPathFlexible(input, spec.from);
    const dict = spec.dict || {};
    return Object.prototype.hasOwnProperty.call(dict, v) ? dict[v] : spec.default;
  }

  // { replace: { from, pattern, template, flags? } }
  if ('replace' in rule) {
    const spec = (rule as any).replace as { from: string; pattern: string; template: string; flags?: string };
    const v = readPathFlexible(input, spec.from);
    if (v == null) return undefined;
    const re = new RegExp(spec.pattern, spec.flags ?? '');
    return String(v).replace(re, spec.template);
  }

  // { formatDate: { from, input, output } }
  if ('formatDate' in rule) {
    const spec = (rule as any).formatDate as { from: string; input: string; output: string };
    const v = readPathFlexible(input, spec.from);
    if (v == null) return undefined;
    const out = simpleDateReformat(String(v), spec.input, spec.output);
    return out ?? v; // fallback: deja el valor original si no matchea
  }

  // { stripPrefix: { from, prefix } }
  if ('stripPrefix' in rule) {
    const spec = (rule as any).stripPrefix as { from: string; prefix: string };
    const raw = readPathFlexible(input, spec.from);
    if (raw == null) return undefined;
    const s = String(raw);
    return s.startsWith(spec.prefix) ? s.slice(spec.prefix.length) : s;
  }

  // { toUpper: { from } }
  if ('toUpper' in rule) {
    const spec = (rule as any).toUpper as { from: string };
    const v = readPathFlexible(input, spec.from);
    return v == null ? undefined : String(v).toUpperCase();
  }

  // { toLower: { from } }
  if ('toLower' in rule) {
    const spec = (rule as any).toLower as { from: string };
    const v = readPathFlexible(input, spec.from);
    return v == null ? undefined : String(v).toLowerCase();
  }

  // { trim: { from } }
  if ('trim' in rule) {
    const spec = (rule as any).trim as { from: string };
    const v = readPathFlexible(input, spec.from);
    return v == null ? undefined : String(v).trim();
  }

  // { padStart: { from, targetLen, padChar? } }
  if ('padStart' in rule) {
    const spec = (rule as any).padStart as { from: string; targetLen: number; padChar?: string };
    const v = readPathFlexible(input, spec.from);
    if (v == null) return undefined;
    return String(v).padStart(spec.targetLen, spec.padChar ?? '0');
  }

  // { padEnd: { from, targetLen, padChar? } }
  if ('padEnd' in rule) {
    const spec = (rule as any).padEnd as { from: string; targetLen: number; padChar?: string };
    const v = readPathFlexible(input, spec.from);
    if (v == null) return undefined;
    return String(v).padEnd(spec.targetLen, spec.padChar ?? '0');
  }

  // { substring: { from, start, end? } }
  if ('substring' in rule) {
    const spec = (rule as any).substring as { from: string; start: number; end?: number };
    const v = readPathFlexible(input, spec.from);
    if (v == null) return undefined;
    return String(v).substring(spec.start, spec.end);
  }

  // { splitPick: { from, sep, index } }
  if ('splitPick' in rule) {
    const spec = (rule as any).splitPick as { from: string; sep: string; index: number };
    const v = readPathFlexible(input, spec.from);
    if (v == null) return undefined;
    const parts = String(v).split(spec.sep);
    return parts[spec.index];
  }

  // { nowMs: true } | { nowMs: { offsetMs } }
  if ('nowMs' in rule) {
    if ((rule as any).nowMs === true) return Date.now();
    const off = (rule as any).nowMs?.offsetMs ?? 0;
    return Date.now() + off;
  }

  return undefined;
}

export function mapRequest(stdInput: any, cfg: MappingConfig) {
  const body: any = {};
  for (const [k, rule] of Object.entries(cfg.request_body_map || {})) {
    const v = evalExpr(rule as MapExpr, stdInput);
    if (v !== undefined) body[k] = v;
  }

  const headers: any = {};
  for (const [k, rule] of Object.entries(cfg.request_headers_map || {})) {
    const v = evalExpr(rule as MapExpr, stdInput);
    if (v !== undefined) headers[k] = v;
  }

  const params: any = {};
  for (const [k, rule] of Object.entries(cfg.request_params_map || {})) {
    const v = evalExpr(rule as MapExpr, stdInput);
    if (v !== undefined) params[k] = v;
  }

  return { body, headers, params };
}

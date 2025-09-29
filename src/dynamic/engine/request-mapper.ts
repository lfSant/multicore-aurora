import { dotGet } from './path-get';
import type { MapExpr, MappingConfig } from '../mapping-config';

const asBool = (v:any) => {
  if (v === true || v === 'true' || v === 1 || v === '1') return true;
  if (v === false || v === 'false' || v === 0 || v === '0') return false;
  return undefined;
};

function evalExpr(rule: MapExpr, input: any): any {
  if (rule == null) return undefined;

  // "a.b[0].c"
  if (typeof rule === 'string') {
    return dotGet(input, rule);
  }

  // { from, default }
  if ('from' in rule && (rule as any).from) {
    const v = dotGet(input, (rule as any).from as string);
    return v === undefined && 'default' in (rule as any) ? (rule as any).default : v;
  }

  // { const }
  if ('const' in rule) return (rule as any).const;

  // { template: "Hola {{user.name}}" }
  if ('template' in rule) {
    const tpl = (rule as any).template as string;
    return tpl.replace(/\{\{([^}]+)\}\}/g, (_m, p1) => {
      const val = dotGet(input, String(p1).trim(), '');
      return val == null ? '' : String(val);
    });
  }

  // { coalesce: ["path1","path2"], default? }
  if ('coalesce' in rule) {
    for (const p of (rule as any).coalesce as string[]) {
      const v = dotGet(input, p);
      if (v != null) return v;
    }
    return (rule as any).default;
  }

  // { pickAnyBoolean: ["path1","path2"], optional?, default? }
  if ('pickAnyBoolean' in rule) {
    for (const p of (rule as any).pickAnyBoolean as string[]) {
      const b = asBool(dotGet(input, p));
      if (typeof b === 'boolean') return b;
    }
    if ((rule as any).optional) return undefined;
    return (rule as any).default ?? false;
  }

  // { toNumber: { from, default? } }
  if ('toNumber' in rule) {
    const spec = (rule as any).toNumber as { from: string; default?: number };
    const v = dotGet(input, spec.from);
    const n = Number(v);
    return Number.isFinite(n) ? n : spec.default;
  }

  // { toBoolean: { from } }
  if ('toBoolean' in rule) {
    const spec = (rule as any).toBoolean as { from: string };
    return asBool(dotGet(input, spec.from));
  }

  // { toDateMs: { from, format?: 'iso'|'epochMs'|'epochSec', default? } }
  if ('toDateMs' in rule) {
    const spec = (rule as any).toDateMs as { from: string; format?: 'iso'|'epochMs'|'epochSec'; default?: number };
    const v = dotGet(input, spec.from);
    if (v == null) return spec.default;
    const f = spec.format || 'iso';
    if (f === 'iso') {
      const t = Date.parse(String(v));
      return Number.isFinite(t) ? t : spec.default;
    }
    if (f === 'epochMs') return Number(v);
    if (f === 'epochSec') return Number(v) * 1000;
  }

  // { join: { of: [...], sep } }
  if ('join' in rule) {
    const spec = (rule as any).join as { of: string[]; sep: string; default?: string };
    const parts = spec.of
      .map((p) => dotGet(input, p))
      .filter((x) => x != null && String(x).trim() !== '');
    return parts.length ? parts.join(spec.sep) : (spec.default ?? '');
  }

  // { mapValue: { from, dict, default? } }
  if ('mapValue' in rule) {
    const spec = (rule as any).mapValue as { from: string; dict?: Record<string, any>; default?: any };
    const v = dotGet(input, spec.from);
    const dict = spec.dict || {};
    return Object.prototype.hasOwnProperty.call(dict, v) ? dict[v] : spec.default;
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

// src/dynamic/engine/response-mapper.ts
import { dotGet } from './path-get';
import type { MapExpr, MappingConfig } from '../mapping-config';

const asBool = (v: any) => {
  if (v === true || v === 'true' || v === 1 || v === '1') return true;
  if (v === false || v === 'false' || v === 0 || v === '0') return false;
  return undefined;
};

/**
 * Función de lectura de rutas que intenta leer tanto en el objeto raíz { status, headers, body }
 * @param src 
 * @param path 
 * @returns 
 */
function readPathFlexible(src: any, path: string): any {
  const v = dotGet(src, path);
  if (v !== undefined) return v;
  if (src && typeof src === 'object' && 'body' in src) {
    const v2 = dotGet(src.body, path);
    if (v2 !== undefined) return v2;
  }
  return undefined;
}

function evalExpr(e: MapExpr, src: any): any {
  if (e == null) return undefined;

  //* string => ruta "a.b[0].c"
  if (typeof e === 'string') {
    return readPathFlexible(src, e);
  }

  //* { from, default }
  if ('from' in e) {
    const v = readPathFlexible(src, (e as any).from as string);
    return v === undefined ? (e as any).default : v;
  }

  //* { const }
  if ('const' in e) return (e as any).const;

  //* { template: "Hola {{user.name}}" }
  if ('template' in e) {
    const tpl = (e as any).template as string;
    return tpl.replace(/\{\{([^}]+)\}\}/g, (_m, p1) => {
      const val = readPathFlexible(src, String(p1).trim());
      return val == null ? '' : String(val);
    });
  }

  //* { coalesce: ["p1","p2"], default? }
  if ('coalesce' in e) {
    for (const p of (e as any).coalesce as string[]) {
      const v = readPathFlexible(src, p);
      if (v != null) return v;
    }
    return (e as any).default;
  }

  //* { pickAnyBoolean: [...], optional?, default? }
  if ('pickAnyBoolean' in e) {
    for (const p of (e as any).pickAnyBoolean as string[]) {
      const b = asBool(readPathFlexible(src, p));
      if (typeof b === 'boolean') return b;
    }
    if ((e as any).optional) return undefined;
    return (e as any).default ?? false;
  }

  //* { pick: [...] } -> objeto de extras (con mapKeys y append)
  if ('pick' in e) {
    const out: Record<string, any> = {};
    const list = (e as any).pick as string[];
    const mapKeys = (e as any).mapKeys as Record<string, string> | undefined;
    const append = (e as any).append as Record<string, any> | undefined;

    for (const p of list) {
      const v = readPathFlexible(src, p);
      if (v !== undefined) {
        const key = mapKeys && mapKeys[p] ? mapKeys[p] : p;
        out[key] = v;
      }
    }
    if (append) Object.assign(out, append);
    return out;
  }

  //* { toNumber: { from, default? } }
  if ('toNumber' in e) {
    const spec = (e as any).toNumber as { from: string; default?: any };
    const v = readPathFlexible(src, spec.from);
    const n = Number(v);
    return Number.isFinite(n) ? n : spec.default;
  }

  //* { toBoolean: { from } }
  if ('toBoolean' in e) {
    const spec = (e as any).toBoolean as { from: string };
    return asBool(readPathFlexible(src, spec.from));
  }

  //* { toDateMs: { from, format?: 'iso'|'epochMs'|'epochSec', default? } }
  if ('toDateMs' in e) {
    const spec = (e as any).toDateMs as { from: string; format?: 'iso'|'epochMs'|'epochSec'; default?: any };
    const v = readPathFlexible(src, spec.from);
    if (v == null) return spec.default;
    const f = spec.format || 'iso';
    if (f === 'iso') {
      const t = Date.parse(String(v));
      return Number.isFinite(t) ? t : spec.default;
    }
    if (f === 'epochMs') return Number(v);
    if (f === 'epochSec') return Number(v) * 1000;
  }

  //* { join: { of: [...], sep, default? } }
  if ('join' in e) {
    const spec = (e as any).join as { of: string[]; sep: string; default?: string };
    const parts = spec.of
      .map((p) => readPathFlexible(src, p))
      .filter((x) => x != null && String(x).trim() !== '');
    return parts.length ? parts.join(spec.sep) : (spec.default ?? '');
  }

  //* { mapValue: { from, dict, default? } }
  if ('mapValue' in e) {
    const spec = (e as any).mapValue as { from: string; dict?: Record<string, any>; default?: any };
    const v = readPathFlexible(src, spec.from);
    const dict = spec.dict || {};
    return Object.prototype.hasOwnProperty.call(dict, v) ? dict[v] : spec.default;
  }

  //* { stripPrefix: { from, prefix } }
  if ('stripPrefix' in e) {
    const spec = (e as any).stripPrefix as { from: string; prefix: string };
    const raw = readPathFlexible(src, spec.from);
    if (raw == null) return undefined;
    const s = String(raw);
    return s.startsWith(spec.prefix) ? s.slice(spec.prefix.length) : s;
  }

  //* { nowMs: true } | { nowMs: { offsetMs } }
  if ('nowMs' in e) {
    if ((e as any).nowMs === true) return Date.now();
    const off = (e as any).nowMs?.offsetMs ?? 0;
    return Date.now() + off;
  }

  return undefined;
}

/**
 * Mapea la respuesta del proveedor a la configuración dada.
 * @param provider 
 * @param cfg 
 * @returns 
 */
export function mapResponse(provider: { status: number; headers: any; body: any }, cfg: MappingConfig) {
  const items: any[] = [];

  for (const shape of cfg.response_items_map || []) {
    const item: Record<string, any> = {};
    let extras: Record<string, any> | undefined;

    for (const [field, rule] of Object.entries(shape)) {
      const val = evalExpr(rule as MapExpr, provider);
      if (val === undefined) continue;

      if (typeof rule === 'object' && rule !== null && 'pick' in (rule as any)) {
        if (Object.keys(val).length) {
          extras = { ...(extras || {}), ...val };
        }
      } else {
        item[field] = val;
      }
    }

    if (extras) item.extras = extras;
    if (Object.keys(item).length > 0) items.push(item);
  }

  return { items };
}

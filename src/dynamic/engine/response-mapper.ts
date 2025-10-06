import { dotGet } from './path-get';
import type { MapExpr, MappingConfig } from '../mapping-config';

const asBool = (v: any) => {
  if (v === true || v === 'true' || v === 1 || v === '1') return true;
  if (v === false || v === 'false' || v === 0 || v === '0') return false;
  return undefined;
};

function evalExpr(e: MapExpr, src: any): any {
  if (e == null) return undefined;

  // string => ruta "a.b[0].c"
  if (typeof e === 'string') {
    return dotGet(src, e);
  }

  // { from, default }
  if ('from' in e) {
    const v = dotGet(src, (e as any).from as string);
    return v === undefined ? (e as any).default : v;
  }

  // { const }
  if ('const' in e) return (e as any).const;

  // { template: "Hola {{user.name}}" }
  if ('template' in e) {
    const tpl = (e as any).template as string;
    return tpl.replace(/\{\{([^}]+)\}\}/g, (_m, p1) => {
      const val = dotGet(src, String(p1).trim(), '');
      return val == null ? '' : String(val);
    });
  }

  // { coalesce: ["p1","p2"], default? }
  if ('coalesce' in e) {
    for (const p of (e as any).coalesce as string[]) {
      const v = dotGet(src, p);
      if (v != null) return v;
    }
    return (e as any).default;
  }

  // { pickAnyBoolean: [...], optional?, default? }
  if ('pickAnyBoolean' in e) {
    for (const p of (e as any).pickAnyBoolean as string[]) {
      const b = asBool(dotGet(src, p));
      if (typeof b === 'boolean') return b;
    }
    if ((e as any).optional) return undefined;
    return (e as any).default ?? false;
  }

  // { pick: [...] } -> objeto de extras
  if ('pick' in e) {
    const out: Record<string, any> = {};
    const list = (e as any).pick as string[];
    const mapKeys = (e as any).mapKeys as Record<string,string> | undefined;
    const append = (e as any).append as Record<string,any> | undefined;
    for (const p of list) {
      const v = dotGet(src, p);
      if (v !== undefined) {
        const key = mapKeys && mapKeys[p] ? mapKeys[p] : p;
        out[key] = v;
      }
    }
    if (append) {
      Object.assign(out, append);
    }
    return out;
  }

  // { toNumber: { from, default? } }
  if ('toNumber' in e) {
    const spec = (e as any).toNumber as { from: string; default?: number };
    const v = dotGet(src, spec.from);
    const n = Number(v);
    return Number.isFinite(n) ? n : spec.default;
  }

  // { toBoolean: { from } }
  if ('toBoolean' in e) {
    const spec = (e as any).toBoolean as { from: string };
    return asBool(dotGet(src, spec.from));
  }

  // { toDateMs: { from, format?: 'iso'|'epochMs'|'epochSec', default? } }
  if ('toDateMs' in e) {
    const spec = (e as any).toDateMs as { from: string; format?: 'iso'|'epochMs'|'epochSec'; default?: number };
    const v = dotGet(src, spec.from);
    if (v == null) return spec.default;
    const f = spec.format || 'iso';
    if (f === 'iso') {
      const t = Date.parse(String(v));
      return Number.isFinite(t) ? t : spec.default;
    }
    if (f === 'epochMs') return Number(v);
    if (f === 'epochSec') return Number(v) * 1000;
  }

  // { join: { of: [...], sep, default? } }
  if ('join' in e) {
    const spec = (e as any).join as { of: string[]; sep: string; default?: string };
    const parts = spec.of
      .map((p) => dotGet(src, p))
      .filter((x) => x != null && String(x).trim() !== '');
    return parts.length ? parts.join(spec.sep) : (spec.default ?? '');
  }

  // { mapValue: { from, dict, default? } }
  if ('mapValue' in e) {
    const spec = (e as any).mapValue as { from: string; dict?: Record<string, any>; default?: any };
    const v = dotGet(src, spec.from);
    const dict = spec.dict || {};
    return Object.prototype.hasOwnProperty.call(dict, v) ? dict[v] : spec.default;
  }

  return undefined;
}

export function mapResponse(providerBody: any, cfg: MappingConfig) {
  const items: any[] = [];

  for (const shape of cfg.response_items_map || []) {
    const item: Record<string, any> = {};
    let extras: Record<string, any> | undefined;

    for (const [field, rule] of Object.entries(shape)) {
      const val = evalExpr(rule as MapExpr, providerBody);
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

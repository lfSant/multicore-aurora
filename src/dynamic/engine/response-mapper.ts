import { dotGet } from './path-get';
import type { MapExpr, MappingConfig } from '../mapping-config';

const asBool = (v: any) => {
  if (v === true || v === 'true' || v === 1 || v === '1') return true;
  if (v === false || v === 'false' || v === 0 || v === '0') return false;
  return undefined;
};

function evalExpr(e: MapExpr, src: any): any {
  if (e == null) return undefined;

  // Soporta regla como string => ruta directa "a.b[0].c"
  if (typeof e === 'string') {
    return dotGet(src, e);
  }

  // from/default
  if ('from' in e) {
    const v = dotGet(src, e.from as string);
    return v === undefined ? (e as any).default : v;
  }

  // const
  if ('const' in e) return (e as any).const;

  // coalesce: primer valor no nulo/no undefined de una lista de rutas
  if ('coalesce' in e) {
    for (const p of (e as any).coalesce as string[]) {
      const v = dotGet(src, p);
      if (v != null) return v;
    }
    return (e as any).default;
  }

  // pickAnyBoolean: busca la primera ruta que pueda convertirse a booleano
  if ('pickAnyBoolean' in e) {
    for (const p of (e as any).pickAnyBoolean as string[]) {
      const b = asBool(dotGet(src, p));
      if (typeof b === 'boolean') return b;
    }
    // si es opcional, permite undefined; si no, aplica default o false
    if ((e as any).optional) return undefined;
    return (e as any).default ?? false;
  }

  // pick: construye un objeto con pares ruta->valor (solo las rutas encontradas)
  if ('pick' in e) {
    const out: Record<string, any> = {};
    for (const p of (e as any).pick as string[]) {
      const v = dotGet(src, p);
      if (v !== undefined) out[p] = v;
    }
    return out;
  }

  // toNumber: Number(value) con default si no es finito
  if ('toNumber' in e) {
    const spec = (e as any).toNumber as { from: string; default?: number };
    const v = dotGet(src, spec.from);
    const n = Number(v);
    return Number.isFinite(n) ? n : spec.default;
  }

  // toBoolean: usa asBool
  if ('toBoolean' in e) {
    const spec = (e as any).toBoolean as { from: string };
    return asBool(dotGet(src, spec.from));
  }

  // toDateMs: 'iso' | 'epochMs' | 'epochSec'
  if ('toDateMs' in e) {
    const spec = (e as any).toDateMs as { from: string; format?: 'iso'|'epochMs'|'epochSec' };
    const v = dotGet(src, spec.from);
    if (v == null) return undefined;
    const f = spec.format || 'iso';
    if (f === 'iso') {
      const t = Date.parse(String(v));
      return Number.isFinite(t) ? t : undefined;
    }
    if (f === 'epochMs') return Number(v);
    if (f === 'epochSec') return Number(v) * 1000;
  }

  // join: concatena partes (rutas) con separador
  if ('join' in e) {
    const spec = (e as any).join as { of: string[]; sep: string };
    const parts = spec.of
      .map((p) => dotGet(src, p))
      .filter((x) => x != null && String(x).trim() !== '');
    return parts.join(spec.sep);
  }

  // mapValue: diccionario de equivalencias
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
    const item: any = {};
    let extras: Record<string, any> | undefined;

    for (const [field, rule] of Object.entries(shape)) {
      const val = evalExpr(rule as MapExpr, providerBody);
      if (val === undefined) continue;

      // Si la regla es 'pick', el valor es un objeto con rutas->valores. Va en extras.
      if (typeof rule === 'object' && rule !== null && 'pick' in (rule as any)) {
        if (Object.keys(val).length) extras = { ...(extras || {}), ...val };
      } else {
        item[field] = val;
      }
    }

    if (extras) item.extras = extras;
    items.push(item);
  }

  return { items };
}

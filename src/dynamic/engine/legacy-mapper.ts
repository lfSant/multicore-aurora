import type { MapExpr } from '../mapping-config';
import { evalExprOn, isEachShape, readPathFlexible } from './response-mapper';

type ProviderContext = { status: number; headers: any; body: any };

/**
 * Genera un objeto/array legacy a partir de legacySpec de la base de datos
 * @param provider Contexto completo de la llamada al proveedor (status, headers, body)
 * @param legacySpec Especificación de mapeo legacy (puede ser null, objeto o arreglo)
 * @returns Objeto legacy mapeado o null si no hay legacySpec
 */
export function mapLegacy(
  provider: ProviderContext,
  legacySpec: Record<string, any> | Array<any> | null | undefined
): any {
  if (!legacySpec) return null;

  if (!Array.isArray(legacySpec) && typeof legacySpec === 'object') {
    const out: Record<string, any> = {};

    for (const [k, rule] of Object.entries(legacySpec)) {
      if (rule && typeof rule === 'object' && 'each' in rule && ('map' in rule || 'mapShape' in rule)) {
        const srcArr = readPathFlexible(provider, (rule as any).each);
        const arr = Array.isArray(srcArr) ? srcArr : [];
        const mappedArr: any[] = [];

        const mapping = (rule as any).mapShape || (rule as any).map || {};
        for (const el of arr) {
          const it: any = {};
          for (const [fk, frule] of Object.entries(mapping as Record<string, MapExpr>)) {
            const v = evalExprOn(frule as MapExpr, el, provider);
            it[fk] = (v === undefined ? "" : v);
          }
          mappedArr.push(it);
        }

        out[k] = mappedArr;
        continue;
      }

      const v = evalExprOn(rule as MapExpr, provider, provider);
      out[k] = (v === undefined ? "" : v);
    }
    return out;
  }

  if (Array.isArray(legacySpec)) {
    const acc: any[] = [];

    for (const shape of legacySpec) {
      if (isEachShape(shape)) {
        const srcArr = readPathFlexible(provider, shape.each);
        const arr = Array.isArray(srcArr) ? srcArr : [];

        for (const el of arr) {
          const it: any = {};
          const mapping = shape.mapShape || shape.map || {};
          for (const [k, rule] of Object.entries(mapping)) {
            const v = evalExprOn(rule as MapExpr, el, provider);
            it[k] = (v === undefined ? "" : v);
          }
          acc.push(it);
        }
        continue;
      }

      if (shape && typeof shape === 'object') {
        const it: any = {};
        for (const [k, rule] of Object.entries(shape as Record<string, MapExpr>)) {
          const v = evalExprOn(rule as MapExpr, provider, provider);
          it[k] = (v === undefined ? "" : v);
        }
        acc.push(it);
      }
    }
    return acc;
  }

  return null;
}

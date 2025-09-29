// src/dynamic/engine/evaluate-error-rules.ts
import { dotGet } from './path-get';

interface ErrorRule {
  // Puedes poner "status" y/o rutas JSON (ej: "body.code", "error.tipo"):
  when?: { status?: number; [jsonPath: string]: any };
  // Búsqueda por "contiene" en la ruta dada (string o any:[]):
  whenContains?: { [jsonPath: string]: string | { any: string[] } };
  client: string;
  server: string;
  status: number;      // HTTP que devolveremos en el envelope de error
  codeHint?: string;   // opcional, para trazabilidad interna
}

function readPath(body: any, path: string): any {
  // Soporta tanto "body.xxx" como rutas directas sobre el body ("xxx", "data.msg", etc.)
  if (path.startsWith('body.') || path.startsWith('body[')) {
    return dotGet({ body }, path);
  }
  // Intento directo sobre el body:
  const v = dotGet(body, path);
  if (v !== undefined) return v;
  // Fallback por compatibilidad con reglas existentes que usan "body.":
  return dotGet({ body }, `body.${path}`);
}

function matchesWhen(status: number, body: any, when?: { status?: number; [jsonPath: string]: any }): boolean {
  if (!when) return true;
  if (when.status !== undefined && when.status !== status) return false;

  for (const [path, expected] of Object.entries(when)) {
    if (path === 'status') continue;
    const got = readPath(body, path);
    if (got !== expected) return false;
  }
  return true;
}

function normalizeToLowerText(value: any): string {
  if (value == null) return '';
  if (Array.isArray(value)) return value.join(' ').toLowerCase();
  if (typeof value === 'object') return JSON.stringify(value).toLowerCase();
  return String(value).toLowerCase();
}

function matchesWhenContains(body: any, whenContains?: { [jsonPath: string]: string | { any: string[] } }): boolean {
  if (!whenContains) return true;

  for (const [path, cond] of Object.entries(whenContains)) {
    const got = readPath(body, path);
    if (got == null) return false;

    const txt = normalizeToLowerText(got);
    if (typeof cond === 'string') {
      if (!txt.includes(cond.toLowerCase())) return false;
    } else if (Array.isArray(cond.any)) {
      const anyLower = cond.any.map((s) => String(s).toLowerCase());
      if (!anyLower.some((needle) => txt.includes(needle))) return false;
    }
  }
  return true;
}

export function evaluateBusinessError(
  status: number,
  body: any,
  rules: ErrorRule[] = []
): { client: string; server: string; status: number; codeHint?: string } | null {
  for (const r of rules) {
    if (!matchesWhen(status, body, r.when)) continue;
    if (!matchesWhenContains(body, r.whenContains)) continue;
    return { client: r.client, server: r.server, status: r.status, codeHint: r.codeHint };
  }
  return null;
}

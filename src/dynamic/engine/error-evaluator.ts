import { dotGet } from './path-get';

export interface ErrorRule {
  when?: { status?: number;[jsonPath: string]: any };
  whenContains?: { [jsonPath: string]: string | { any: string[] } };
  client: string;
  server: string;
  status: number;
  codeHint?: string;
}

function readPath(body: any, path: string): any {
  if (path.startsWith('body.') || path.startsWith('body[')) {
    return dotGet({ body }, path);
  }
  const v = dotGet(body, path);
  if (v !== undefined) return v;
  return dotGet({ body }, `body.${path}`);
}

function matchesWhen(status: number, body: any, when?: { status?: number;[jsonPath: string]: any }): boolean {
  if (!when) return true;
  if (when.status !== undefined && when.status !== status) return false;

  for (const [path, expected] of Object.entries(when)) {
    if (path === 'status') continue;
    const got = readPath(body, path);
    if (got !== expected) return false; // igualdad estricta
  }
  return true;
}

function normalizeToLowerText(value: any): string {
  if (value == null) return '';
  if (Array.isArray(value)) return value.join(' ').toLowerCase();
  if (typeof value === 'object') return JSON.stringify(value).toLowerCase();
  return String(value).toLowerCase();
}

function matchesWhenContains(
  body: any,
  whenContains?: { [jsonPath: string]: string | { any: string[] } }
): boolean {
  if (!whenContains) return true;

  for (const [path, cond] of Object.entries(whenContains)) {
    const got = readPath(body, path);
    if (got == null) return false;

    const txt = normalizeToLowerText(got);
    if (typeof cond === 'string') {
      if (!txt.includes(cond.toLowerCase())) return false;
    } else if (cond && typeof cond === 'object' && Array.isArray(cond.any)) {
      const needles = cond.any.map((s) => String(s).toLowerCase());
      if (!needles.some((needle) => txt.includes(needle))) return false;
    } else {
      return false; // formato de regla inválido
    }
  }
  return true; // todas las condiciones se cumplen
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

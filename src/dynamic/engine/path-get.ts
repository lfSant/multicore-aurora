export type PathSeg = string | number;

const TOKENS_CACHE = new Map<string, PathSeg[]>();

function toPath(path: string): PathSeg[] {
  const tokens: PathSeg[] = [];
  let i = 0, part = '';
  let inBracket = false;
  let inQuote: "'" | '"' | null = null;

  const pushPart = () => {
    if (part.length === 0) return;
    if (!inQuote && /^\d+$/.test(part)) tokens.push(Number(part));
    else tokens.push(part);
    part = '';
  };

  while (i < path.length) {
    const ch = path[i];

    if (inBracket) {
      if (inQuote) {
        if (ch === '\\' && i + 1 < path.length) { part += path[i + 1]; i += 2; continue; }
        if (ch === inQuote) { inQuote = null; i++; continue; }
        part += ch; i++; continue;
      }
      if (ch === "'" || ch === '"') { inQuote = ch as "'" | '"'; i++; continue; }
      if (ch === ']') { pushPart(); inBracket = false; i++; continue; }
      if (ch === ' ' || ch === '\t') { i++; continue; }
      part += ch; i++; continue;
    } else {
      if (ch === '\\' && i + 1 < path.length) { part += path[i + 1]; i += 2; continue; }
      if (ch === '.') { pushPart(); i++; continue; }
      if (ch === '[') { pushPart(); inBracket = true; i++; continue; }
      part += ch; i++; continue;
    }
  }
  pushPart();
  return tokens;
}

export function dotGet(obj: any, path?: string, defaultValue?: any): any {
  if (path == null || path === '') return obj;
  let tokens = TOKENS_CACHE.get(path);
  if (!tokens) { tokens = toPath(path); TOKENS_CACHE.set(path, tokens); }
  let cur = obj;
  for (const seg of tokens) {
    if (cur == null) return defaultValue;
    cur = (cur as any)[seg as any];
  }
  return cur === undefined ? defaultValue : cur;
}

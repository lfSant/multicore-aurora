import { dotGet } from './path-get';
import type { MapExpr, MappingConfig } from '../mapping-config';

function evalExpr(rule: MapExpr, input: any): any {
  if (rule == null) return undefined;

  if (typeof rule === 'string') {
    return dotGet(input, rule);
  }

  if ('from' in rule && rule.from) {
    const v = dotGet(input, rule.from);
    return v === undefined && 'default' in (rule as any) ? (rule as any).default : v;
  }

  if ('const' in rule) return (rule as any).const;

  if ('template' in rule) {
    const tpl = (rule as any).template as string;
    return tpl.replace(/\{\{([^}]+)\}\}/g, (_m, p1) => {
      const val = dotGet(input, String(p1).trim(), '');
      return val == null ? '' : String(val);
    });
  }

  return undefined;
}

export function mapRequest(stdInput: any, cfg: MappingConfig) {
  const body: any = {};
  for (const [k, rule] of Object.entries(cfg.request_body_map || {})) {
    body[k] = evalExpr(rule as MapExpr, stdInput);
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

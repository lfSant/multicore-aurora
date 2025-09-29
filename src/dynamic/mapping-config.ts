import { z } from "zod";

export const MapExprSchema: z.ZodType<any> = z.union([
  z.object({ from: z.string(), default: z.any().optional() }),
  z.object({ const: z.any() }),
  z.object({ coalesce: z.array(z.string()), default: z.any().optional() }),
  z.object({ pickAnyBoolean: z.array(z.string()), default: z.boolean().optional(), optional: z.boolean().optional() }),
  z.object({ pick: z.array(z.string()) }),

  // extensiones para dy-29
  z.object({ toNumber: z.object({ from: z.string(), default: z.number().optional() }) }),
  z.object({ toBoolean: z.object({ from: z.string() }) }),
  z.object({ toDateMs: z.object({ from: z.string(), format: z.enum(["iso","epochMs","epochSec"]).optional() }) }),
  z.object({ join: z.object({ of: z.array(z.string()), sep: z.string().default(" ") }) }),
  z.object({ mapValue: z.object({ from: z.string(), dict: z.record(z.any()), default: z.any().optional() }) }),
]);

export const MappingConfigSchema = z.object({
  provider_key: z.string(),
  operation_key: z.string(),
  version: z.number().int(),
  is_active: z.boolean(),

  request_body_map: z.record(MapExprSchema),
  request_headers_map: z.record(MapExprSchema).optional(),
  request_params_map: z.record(MapExprSchema).optional(),

  response_items_map: z.array(z.record(MapExprSchema)),
  response_raw: z.boolean().optional(),

  error_rules_json: z.array(z.any()).optional(),
});

export type MappingConfig = z.infer<typeof MappingConfigSchema>;
export type MapExpr = z.infer<typeof MapExprSchema>;

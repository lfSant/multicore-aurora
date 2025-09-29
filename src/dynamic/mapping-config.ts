import { z } from "zod";

const Obj = <T extends z.ZodRawShape>(shape: T) =>
  z.object(shape).passthrough();

export const MapExprSchema = z.union([
  Obj({ from: z.string(), default: z.any().optional() }),
  Obj({ const: z.any() }),
  Obj({ template: z.string() }),
  Obj({ coalesce: z.array(z.string()), default: z.any().optional() }),
  Obj({
    pickAnyBoolean: z.array(z.string()),
    default: z.boolean().optional(),
    optional: z.boolean().optional()
  }),
  Obj({ pick: z.array(z.string()) }),

  Obj({ toNumber: z.object({ from: z.string(), default: z.number().optional() }).passthrough() }),
  Obj({ toBoolean: z.object({ from: z.string() }).passthrough() }),
  Obj({
    toDateMs: z.object({
      from: z.string(),
      format: z.enum(["iso", "epochMs", "epochSec"]).optional(),
      default: z.number().optional()
    }).passthrough()
  }),
  Obj({
    join: z.object({
      of: z.array(z.string()),
      sep: z.string().default(" ")
    }).passthrough()
  }),
  Obj({
    mapValue: z.object({
      from: z.string(),
      dict: z.record(z.any()),
      default: z.any().optional()
    }).passthrough()
  }),
]);

export const MappingConfigSchema = z.object({
  provider_key: z.string(),
  operation_key: z.string(),
  version: z.number().int(),
  is_active: z.boolean(),

  request_body_map: z.record(MapExprSchema).default({}),
  request_headers_map: z.record(MapExprSchema).optional().default({}),
  request_params_map: z.record(MapExprSchema).optional().default({}),

  response_items_map: z.array(z.record(MapExprSchema)).default([]),
  response_raw: z.boolean().optional().default(false),

  error_rules_json: z.array(z.any()).optional().default([]),
}).passthrough();


export type MappingConfig = z.infer<typeof MappingConfigSchema>;
export type MapExpr = z.infer<typeof MapExprSchema>;

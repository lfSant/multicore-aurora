import { z } from "zod";

const Obj = <T extends z.ZodRawShape>(shape: T) =>
  z.object(shape).passthrough();

/**
 * Regla de mapeo de un campo
 */
export const MapExprSchema = z.union([
  z.string(),
  Obj({ from: z.string(), default: z.any().optional() }),
  Obj({ const: z.any() }),
  Obj({ template: z.string() }),
  Obj({ coalesce: z.array(z.string()), default: z.any().optional() }),
  Obj({
    pickAnyBoolean: z.array(z.string()),
    default: z.boolean().optional(),
    optional: z.boolean().optional()
  }),
  Obj({
    pick: z.array(z.string()),
    mapKeys: z.record(z.string()).optional(),
    append: z.record(z.any()).optional()
  }),

  Obj({ toNumber: z.object({ from: z.string(), default: z.number().optional() }).passthrough() }),
  Obj({ toString: z.object({ from: z.string(), default: z.string().optional() }).passthrough() }),
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
  Obj({ stripPrefix: z.object({ from: z.string(), prefix: z.string() }) }),
  Obj({ nowMs: z.union([z.literal(true), z.object({ offsetMs: z.number() })]) }),
]);

const ResponseItemShapeSchema = z.record(MapExprSchema);
const ResponseItemEachSchema = Obj({ each: z.string(), map: z.record(MapExprSchema) });

/**
 * Config de mapeo entre request/response y la API externa
 */
export const MappingConfigSchema = z.object({
  provider_key: z.string(),
  operation_key: z.string(),
  version: z.number().int(),
  is_active: z.boolean(),

  // Config de request
  request_path: z.string().optional(),
  request_method: z.enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH']).optional(),
  request_timeout_ms: z.number().int().optional(),
  default_headers_json: z.record(z.any()).optional().default({}),
  default_params_json: z.record(z.any()).optional().default({}),

  // Mapeos de request
  request_body_map: z.record(MapExprSchema).optional().default({}),
  request_headers_map: z.record(MapExprSchema).optional().default({}),
  request_params_map: z.record(MapExprSchema).optional().default({}),

  // Mapeos de response
  response_items_map: z.array(z.union([ResponseItemShapeSchema, ResponseItemEachSchema])).default([]),
  response_raw: z.boolean().optional().default(false),

  // Reglas de error
  error_rules_json: z.array(z.any()).optional().default([]),

  // Modelo de datos legacy
  legacy_enabled: z.boolean().optional().default(false),
  legacy_map_json: z.union([
    z.null(),
    z.record(MapExprSchema),
    z.array(z.union([ResponseItemShapeSchema, ResponseItemEachSchema]))
  ]).optional().default(null),

  request_encrypt_enabled: z.boolean().optional().default(false),
  request_encrypt_algorithms: z.union([
    z.array(z.enum(['RSA', 'AES'])),
    z.record(z.never()),
    z.null()
  ]).optional().default([]).transform(val => {
    if (!val || (typeof val === 'object' && !Array.isArray(val) && Object.keys(val).length === 0)) {
      return [];
    }
    return Array.isArray(val) ? val : [];
  }),
  request_encrypt_keys: z.union([
    z.record(z.any()),
    z.null()
  ]).optional().default({}),
  request_encrypt_wrapper: z.union([
    z.record(z.any()),
    z.null()
  ]).optional().default({}),
  request_encrypt_config: z.union([
    z.object({
      aes: z.object({
        mode: z.enum(['GCM', 'CBC', 'CTR', 'CFB']).optional().default('GCM'),
        keySize: z.number().optional().default(256),
        ivSize: z.number().optional().default(12),
      }).optional(),
      rsa: z.object({
        padding: z.enum(['OAEP', 'PKCS1']).optional().default('OAEP'),
        oaepHash: z.enum(['sha256', 'sha384', 'sha512', 'sha1']).optional().default('sha256'),
      }).optional(),
    }),
    z.record(z.never()),
    z.null()
  ]).optional().default({}).transform(val => {
    if (!val || (typeof val === 'object' && !Array.isArray(val) && Object.keys(val).length === 0)) {
      return {};
    }
    return val;
  }),
}).passthrough();

export type MappingConfig = z.infer<typeof MappingConfigSchema>;
export type MapExpr = z.infer<typeof MapExprSchema>;

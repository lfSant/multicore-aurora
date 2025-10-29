import { MappingConfigRepo } from "./MappingConfigRepo";
import { MappingConfig, MappingConfigSchema } from "../mapping-config";
import type { Pool } from "mysql2/promise";

//Funcion para parsear un JSON que puede venir como string o como objeto
function parseMaybe<T>(v: any): T {
  if (v == null) return v;
  if (typeof v === "string") {
    try { return JSON.parse(v) as T; } catch { return v as T; }
  }
  return v as T;
}

export class MySqlMappingConfigRepo implements MappingConfigRepo {
  constructor(private readonly pool: Pool, private readonly table = "mapping_config") { }

  async getActive(provider: string, operation: string): Promise<MappingConfig | null> {
    const [rows]: any = await this.pool.query(
      `SELECT * FROM ${this.table}
       WHERE provider_key = ? AND operation_key = ? AND is_active = 1
       ORDER BY version DESC LIMIT 1`,
      [provider, operation]
    );
    const r = rows?.[0];
    if (!r) return null;

    const cfg = {
      provider_key: r.provider_key,
      operation_key: r.operation_key,
      version: r.version,
      is_active: !!r.is_active,
      title: r.title,
      description: r.description,
      request_path: r.request_path ?? '',
      request_method: r.request_method ?? undefined,
      request_timeout_ms: r.request_timeout_ms ? Number(r.request_timeout_ms) : undefined,
      default_headers_json: parseMaybe<Record<string, any>>(r.default_headers_json) ?? {},
      default_params_json: parseMaybe<Record<string, any>>(r.default_params_json) ?? {},
      request_body_map: parseMaybe(r.request_body_map) ?? {},
      request_headers_map: parseMaybe(r.request_headers_map) ?? {},
      request_params_map: parseMaybe(r.request_params_map) ?? {},
      response_items_map: parseMaybe(r.response_items_map) ?? [],
      response_raw: !!r.response_raw,
      error_rules_json: parseMaybe(r.error_rules_json) ?? [],
      legacy_enabled: !!r.legacy_enabled,
      legacy_map_json: (r.legacy_map_json === null ? null : parseMaybe(r.legacy_map_json)),
      request_encrypt_enabled: !!r.request_encrypt_enabled,
      request_encrypt_algorithms: parseMaybe<Array<'RSA' | 'AES'>>(r.request_encrypt_algorithms) ?? [],
      request_encrypt_keys: parseMaybe<Record<string, any>>(r.request_encrypt_keys) ?? {},
      request_encrypt_wrapper: parseMaybe<Record<string, any>>(r.request_encrypt_wrapper) ?? {},
      request_encrypt_config: parseMaybe<Record<string, any>>(r.request_encrypt_config) ?? {},
    };
    return MappingConfigSchema.parse(cfg);
  }
}

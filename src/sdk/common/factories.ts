// src/sdk/common/factories.ts
import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { MySqlMappingConfigRepo } from "../../dynamic/repo/MySqlMappingConfigRepo";
import { RedisKV, MemoryKV, KVCache } from "../../dynamic/index";
import { getMySqlPool, getRedisClient } from "./init";

export interface AdapterFactoryOptions {
  cacheTTL?: number;
  tableName?: string;
  tenant?: string;
  environment?: string;
}

export function createBaseDynamicAdapter<TItem = any>(
  providerKey: string,
  operationKey: string,
  opts: AdapterFactoryOptions = {}
) {
  const repo = new MySqlMappingConfigRepo(
    getMySqlPool(),
    opts.tableName ?? "mapping_config"
  );

  let cache: KVCache;
  try {
    const redis = getRedisClient(); 
    cache = new RedisKV(redis, `mcore:map:${providerKey}:${operationKey}`);
  } catch (e) {
    console.warn("[multicore-connector] Redis no inicializado; usando MemoryKV temporalmente.", e);
    cache = new MemoryKV();
    // throw e;
  }

  return new BaseDynamicAdapter<TItem>(
    repo,
    cache,
    providerKey,
    operationKey,
    opts.cacheTTL ?? 60
  );
}

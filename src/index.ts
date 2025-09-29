// core shared
export * from "./core/shared/types";
export * from "./core/shared/http";
export * from "./core/shared/envelope";
export * from "./core/shared/errors";

// client profile DTOs + port + usecase
export * from "./core/application/dto/commands/GetClientProfile.command";
export * from "./core/application/dto/results/ClientProfile.result";
export * from "./core/application/ports/outbound/ClientProfileProviderPort";
export * from "./core/application/use-cases/GetClientProfile.usecase";

// provider adapter
export * from "./providers/client/DynamicClientProfileAdapter";

// dynamic infra
export * from "./dynamic/repo/MappingConfigRepo";
export * from "./dynamic/repo/MySqlMappingConfigRepo";
export * from "./dynamic/cache/KVCache";
export * from "./dynamic/cache/RedisKV";
export * from "./dynamic/cache/MemoryKV";

// SDK (se consumen por subruta: multicore-connector/sdk/common/init, multicore-connector/sdk/client)
export * from "./sdk/common/init";
export * from "./sdk/common/types";
export * from "./sdk/client/index";
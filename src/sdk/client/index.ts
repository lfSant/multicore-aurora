import { GetClientProfileUseCase } from "../../core/application/use-cases/GetClientProfile.usecase";
import { DynamicClientProfileAdapter } from "../../providers/client/DynamicClientProfileAdapter";
import { MySqlMappingConfigRepo } from "../../dynamic/repo/MySqlMappingConfigRepo";
import { RedisKV } from "../../dynamic/cache/RedisKV";
import { getMySqlPool, getRedisClient } from "../common/init";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { GetClientProfileCommand } from "../../core/application/dto/commands/GetClientProfile.command";
import type { CanonicalResponse } from "../../core/shared/types";
import type { ClientProfile } from "../../core/application/dto/results/ClientProfile.result";
import type { ProviderKey } from "../common/types";

export async function getClientProfile(
  command: GetClientProfileCommand,
  http: ProviderCallConfig,
  opts: { provider: ProviderKey }
): Promise<CanonicalResponse<ClientProfile>> {
  const repo = new MySqlMappingConfigRepo(getMySqlPool());
  const kv = new RedisKV(getRedisClient());
  const adapter = new DynamicClientProfileAdapter(repo, kv, opts.provider, { cacheTTL: 60 });
  const uc = new GetClientProfileUseCase(adapter);
  return uc.execute(command, http);
}

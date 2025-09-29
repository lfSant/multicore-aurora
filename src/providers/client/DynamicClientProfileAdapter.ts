import { ClientProfileProviderPort } from "../../core/application/ports/outbound/ClientProfileProviderPort";
import { GetClientProfileCommand } from "../../core/application/dto/commands/GetClientProfile.command";
import { ClientProfile } from "../../core/application/dto/results/ClientProfile.result";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { MappingConfigRepo } from "../../dynamic/repo/MappingConfigRepo";
import { KVCache } from "../../dynamic/cache/KVCache";

export class DynamicClientProfileAdapter implements ClientProfileProviderPort {
  private readonly base: BaseDynamicAdapter<ClientProfile>;

  constructor(
    repo: MappingConfigRepo,
    cache: KVCache,
    providerKey: string,
    opts?: { cacheTTL?: number }
  ) {
    this.base = new BaseDynamicAdapter<ClientProfile>(
      repo, cache, providerKey, 'getClientProfile', opts?.cacheTTL ?? 60
    );
  }

  getProfile(
    cmd: GetClientProfileCommand,
    http: ProviderCallConfig
  ): Promise<ProviderResult<ClientProfile>> {
    return this.base.run(cmd, http);
  }
}

import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ClientProfile } from "../../core/application/dto/results/ClientProfile.result";
import { GetClientProfileCommand } from "../../core/application/dto/commands/GetClientProfile.command";
import { ClientProfileProviderPort } from "../../core/application/ports/outbound/ClientProfileProviderPort";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class DynamicClientProfileAdapter implements ClientProfileProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<ClientProfile>) {}

  getProfile(
    cmd: GetClientProfileCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ClientProfile>> {
    return this.base.run(cmd, http, options);
  }
}

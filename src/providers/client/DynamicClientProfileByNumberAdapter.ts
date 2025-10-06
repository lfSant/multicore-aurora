import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ClientProfileByNumber } from "../../core/application/dto/results/ClientProfileByNumber.result";
import { GetClientProfileByNumberCommand } from "../../core/application/dto/commands/GetClientProfileByNumber.command";
import { ClientProfileByNumberProviderPort } from "../../core/application/ports/outbound/ClientProfileByNumberProviderPort";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class DynamicClientProfileByNumberAdapter implements ClientProfileByNumberProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<ClientProfileByNumber>) {}

  getProfile(
    cmd: GetClientProfileByNumberCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ClientProfileByNumber>> {
    return this.base.run(cmd, http, options);
  }
}

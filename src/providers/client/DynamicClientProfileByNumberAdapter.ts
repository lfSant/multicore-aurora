import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ClientProfileByNumberProviderPort } from "../../core/application/ports/outbound/ClientProfileByNumberProviderPort";
import { GetClientProfileByNumberCommand } from "../../core/application/dto/commands/GetClientProfileByNumber.command";
import { ClientProfileByNumber } from "../../core/application/dto/results/ClientProfileByNumber.result";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class ClientProfileByNumberDynamicAdapter implements ClientProfileByNumberProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<ClientProfileByNumber>) {}

  getProfile(
    cmd: GetClientProfileByNumberCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ClientProfileByNumber>> {
    return this.base.run(cmd, http, options);
  }
}

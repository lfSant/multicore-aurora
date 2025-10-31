import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { AccountSignersInfo } from "../../core/application/dto/results/AccountSigner.result";
import { GetAccountSignersCommand } from "../../core/application/dto/commands/GetAccountSigners.command";
import { AccountSignersProviderPort } from "../../core/application/ports/outbound/AccountSignersProviderPort";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class DynamicAccountSignersAdapter implements AccountSignersProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<AccountSignersInfo>) {}

  getAccountSigners(
    cmd: GetAccountSignersCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<AccountSignersInfo>> {
    return this.base.run(cmd, http, options);
  }
}

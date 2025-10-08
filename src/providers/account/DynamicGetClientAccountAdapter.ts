import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { Account } from "../../core/application/dto/results/Account.result";
import { GetAccountByNumberCommand } from "../../core/application/dto/commands/GetAccountByNumberCommand.command";
import { ClientAccountByNumberProviderPort } from "../../core/application/ports/outbound/ClientAccountByNumberProviderPort";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class GetClientAccountDynamicAdapter implements ClientAccountByNumberProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<Account>) {}

  getAccountByNumber(
    cmd: GetAccountByNumberCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<Account>> {
    return this.base.run(cmd, http, options);
  }
}

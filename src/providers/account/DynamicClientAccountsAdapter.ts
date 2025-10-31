import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { Account } from "../../core/application/dto/results/Account.result";
import { ListAccountsCommand } from "../../core/application/dto/commands/ListAccounts.command";
import { ClientAccountsProviderPort } from "../../core/application/ports/outbound/ClientAccountsProviderPort";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class ClientAccountsDynamicAdapter implements ClientAccountsProviderPort{
  constructor(private readonly base: BaseDynamicAdapter<Account[]>) {}

  clientAccounts(
    cmd: ListAccountsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<Account[]>> {
    return this.base.run(cmd, http, options);
  }
}

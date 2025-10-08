import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { Account } from "../../core/application/dto/results/Account.result";
import { GetConsolidatedAccountsCommand } from "../../core/application/dto/commands/GetConsolidatedAccounts.command";
import { ConsolidatedAccountsProviderPort } from "../../core/application/ports/outbound/ConsolidatedAccountsProviderPort";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class ConsolidatedAccountsDynamicAdapter implements ConsolidatedAccountsProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<Account[]>) {}

  getConsolidatedAccounts(
    cmd: GetConsolidatedAccountsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<Account[]>> {
    return this.base.run(cmd, http, options);
  }
}

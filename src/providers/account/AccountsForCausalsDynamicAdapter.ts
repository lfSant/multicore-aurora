import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { GetAccountsForCausalsCommand } from "../../core/application/dto/commands/GetAccountsForCausals.command";
import { AccountForCausalResult } from "../../core/application/dto/results/AccountForCausal.result";
import { GetAccountsForCausalsProviderPort } from "../../core/application/ports/outbound/GetAccountsForCausalsProviderPort";

export class AccountsForCausalsDynamicAdapter
  implements GetAccountsForCausalsProviderPort
{
  constructor(private readonly base: BaseDynamicAdapter<AccountForCausalResult>) {}

  getAccountsForCausals(
    cmd: GetAccountsForCausalsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<AccountForCausalResult>> {
    return this.base.run(cmd, http, options);
  }
}

import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { GetAccountsForCausalsProviderPort } from "../../core/application/ports/outbound/GetAccountsForCausalsProviderPort";
import { GetAccountsForCausalsCommand } from "../../core/application/dto/commands/GetAccountsForCausals.command";
import { AccountForCausalResult } from "../../core/application/dto/results/AccountForCausal.result";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class DynamicAccountsForCausalsAdapter<T = AccountForCausalResult>
  implements GetAccountsForCausalsProviderPort
{
  constructor(private readonly base: BaseDynamicAdapter<T>) {}

  getAccountsForCausals(
    cmd: GetAccountsForCausalsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<T>> {
    return this.base.run<GetAccountsForCausalsCommand>(cmd, http, options);
  }
}

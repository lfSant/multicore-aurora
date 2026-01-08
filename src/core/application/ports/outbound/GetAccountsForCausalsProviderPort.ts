import { ProviderResult } from "../../../shared/types";
import { ProviderCallConfig } from "../../../shared/http";
import { AccountForCausalResult } from "../../dto/results/AccountForCausal.result";
import { GetAccountsForCausalsCommand } from "../../dto/commands/GetAccountsForCausals.command";

export interface GetAccountsForCausalsProviderPort {
  getAccountsForCausals(
    cmd: GetAccountsForCausalsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<AccountForCausalResult>>;
}

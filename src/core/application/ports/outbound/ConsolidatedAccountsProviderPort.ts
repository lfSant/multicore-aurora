import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { GetConsolidatedAccountsCommand } from "../../dto/commands/GetConsolidatedAccounts.command";
import { Account } from "../../dto/results/Account.result";

export interface ConsolidatedAccountsProviderPort {
  getConsolidatedAccounts(
    cmd: GetConsolidatedAccountsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<Account[]>>;
}
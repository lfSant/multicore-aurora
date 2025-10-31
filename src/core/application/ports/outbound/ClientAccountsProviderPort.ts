import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { ListAccountsCommand } from "../../dto/commands/ListAccounts.command";
import { Account } from "../../dto/results/Account.result";

export interface ClientAccountsProviderPort {
  clientAccounts(
    cmd: ListAccountsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<Account[]>>;
}
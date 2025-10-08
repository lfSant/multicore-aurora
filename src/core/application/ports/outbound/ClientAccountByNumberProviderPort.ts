import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { GetAccountByNumberCommand } from "../../dto/commands/GetAccountByNumber.command";
import { Account } from "../../dto/results/Account.result";

export interface ClientAccountByNumberProviderPort {
  getAccountByNumber(
    cmd: GetAccountByNumberCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<Account>>;
}

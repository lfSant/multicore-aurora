import { GetAccountSignersCommand } from "../../dto/commands/GetAccountSigners.command";
import { AccountSignersInfo } from "../../dto/results/AccountSigner.result";
import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";

export interface AccountSignersProviderPort {
  getAccountSigners(
    cmd: GetAccountSignersCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<AccountSignersInfo>>;
}

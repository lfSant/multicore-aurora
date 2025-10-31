import { GetClientLoansCommand } from "../../dto/commands/GetClientLoans.command";
import { ClientLoan } from "../../dto/results/ClientLoan.result";
import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";

export interface ClientLoansProviderPort {
  getClientLoans(
    cmd: GetClientLoansCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ClientLoan[]>>;
}

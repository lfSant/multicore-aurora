import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ClientLoansProviderPort } from "../../core/application/ports/outbound/ClientLoansProviderPort";
import { GetClientLoansCommand } from "../../core/application/dto/commands/GetClientLoans.command";
import { ClientLoan } from "../../core/application/dto/results/ClientLoan.result";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class ClientLoansDynamicAdapter implements ClientLoansProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<ClientLoan[]>) {}

  getClientLoans(
    cmd: GetClientLoansCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ClientLoan[]>> {
    return this.base.run(cmd, http, options);
  }
}

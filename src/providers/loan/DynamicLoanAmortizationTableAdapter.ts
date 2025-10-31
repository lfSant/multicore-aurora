import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { LoanAmortizationTableProviderPort } from "../../core/application/ports/outbound/LoanAmortizationTableProviderPort";
import { GetLoanAmortizationTableCommand } from "../../core/application/dto/commands/GetLoanAmortizationTable.command";
import { LoanAmortizationTable } from "../../core/application/dto/results/LoanAmortizationTable.result";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class LoanAmortizationTableDynamicAdapter implements LoanAmortizationTableProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<LoanAmortizationTable>) {}

  getLoanAmortizationTable(
    cmd: GetLoanAmortizationTableCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<LoanAmortizationTable>> {
    return this.base.run(cmd, http, options);
  }
}

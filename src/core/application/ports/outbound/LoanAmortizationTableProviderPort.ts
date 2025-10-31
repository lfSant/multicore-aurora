import { GetLoanAmortizationTableCommand } from "../../dto/commands/GetLoanAmortizationTable.command";
import { LoanAmortizationTable } from "../../dto/results/LoanAmortizationTable.result";
import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";

export interface LoanAmortizationTableProviderPort {
  getLoanAmortizationTable(
    cmd: GetLoanAmortizationTableCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<LoanAmortizationTable>>;
}

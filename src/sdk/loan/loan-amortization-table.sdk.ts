import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { GetLoanAmortizationTableCommand } from "../../core/application/dto/commands/GetLoanAmortizationTable.command";
import { LoanAmortizationTable } from "../../core/application/dto/results/LoanAmortizationTable.result";
import { GetLoanAmortizationTableUseCase } from "../../core/application/use-cases/GetLoanAmortizationTable.usecase";
import { LoanAmortizationTableDynamicAdapter } from "../../providers/loan/DynamicLoanAmortizationTableAdapter";

export function createLoanAmortizationTableUseCase(
  providerKey: string,
  operationKey = "getLoanAmortizationTable",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<LoanAmortizationTable>(providerKey, operationKey, adapterOptions);
  const port = new LoanAmortizationTableDynamicAdapter(base);
  return new GetLoanAmortizationTableUseCase(port);
}

export async function getLoanAmortizationTable(
  command: GetLoanAmortizationTableCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<LoanAmortizationTable>> {
  const uc = createLoanAmortizationTableUseCase(
    opts.provider,
    opts.operation ?? "getLoanAmortizationTable",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

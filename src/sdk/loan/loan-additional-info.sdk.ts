import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { GetLoanAdditionalInfoCommand } from "../../core/application/dto/commands/GetLoanAdditionalInfo.command";
import { LoanAdditionalInfo } from "../../core/application/dto/results/LoanAdditionalInfo.result";
import { GetLoanAdditionalInfoUseCase } from "../../core/application/use-cases/GetLoanAdditionalInfo.usecase";
import { LoanAdditionalInfoDynamicAdapter } from "../../providers/loan/DynamicLoanAdditionalInfoAdapter";

export function createLoanAdditionalInfoUseCase(
  providerKey: string,
  operationKey = "getLoanAdditionalInfo",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<LoanAdditionalInfo>(providerKey, operationKey, adapterOptions);
  const port = new LoanAdditionalInfoDynamicAdapter(base);
  return new GetLoanAdditionalInfoUseCase(port);
}

export async function getLoanAdditionalInfo(
  command: GetLoanAdditionalInfoCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<LoanAdditionalInfo>> {
  const uc = createLoanAdditionalInfoUseCase(
    opts.provider,
    opts.operation ?? "getLoanAdditionalInfo",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

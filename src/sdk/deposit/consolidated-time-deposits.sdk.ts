import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { GetConsolidatedTimeDepositsCommand } from "../../core/application/dto/commands/GetConsolidatedTimeDeposits.command";
import { TimeDeposit } from "../../core/application/dto/results/TimeDeposit.result";
import { GetConsolidatedTimeDepositsUseCase } from "../../core/application/use-cases/GetConsolidatedTimeDeposits.usecase";
import { ConsolidatedTimeDepositsDynamicAdapter } from "../../providers/deposit/DynamicConsolidatedTimeDepositsAdapter";

export function createConsolidatedTimeDepositsUseCase(
  providerKey: string,
  operationKey = "getConsolidatedTimeDeposits",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<TimeDeposit[]>(providerKey, operationKey, adapterOptions);
  const port = new ConsolidatedTimeDepositsDynamicAdapter(base);
  return new GetConsolidatedTimeDepositsUseCase(port);
}

export async function getConsolidatedTimeDeposits(
  command: GetConsolidatedTimeDepositsCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<TimeDeposit[]>> {
  const uc = createConsolidatedTimeDepositsUseCase(
    opts.provider,
    opts.operation ?? "getConsolidatedTimeDeposits",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

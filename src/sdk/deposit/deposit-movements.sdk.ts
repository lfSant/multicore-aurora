import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { GetDepositMovementsCommand } from "../../core/application/dto/commands/GetDepositMovements.command";
import { DepositMovement } from "../../core/application/dto/results/DepositMovement.result";
import { GetDepositMovementsUseCase } from "../../core/application/use-cases/GetDepositMovements.usecase";
import { DepositMovementsDynamicAdapter } from "../../providers/deposit/DynamicDepositMovementsAdapter";

export function createDepositMovementsUseCase(
  providerKey: string,
  operationKey = "getDepositMovements",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<DepositMovement[]>(providerKey, operationKey, adapterOptions);
  const port = new DepositMovementsDynamicAdapter(base);
  return new GetDepositMovementsUseCase(port);
}

export async function getDepositMovements(
  command: GetDepositMovementsCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<DepositMovement[]>> {
  const uc = createDepositMovementsUseCase(
    opts.provider,
    opts.operation ?? "getDepositMovements",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

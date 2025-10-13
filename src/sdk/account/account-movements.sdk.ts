import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { AccountMovement, GetAccountMovementsCommand, ListAccountMovementsUseCase } from "../../core";
import { AccountMovementsDynamicAdapter } from "../..";

export function createAccountMovementsUseCase(
  providerKey: string,
  operationKey = "accountMovements",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<AccountMovement[]>(providerKey, operationKey, adapterOptions);
  const port = new AccountMovementsDynamicAdapter(base);
  return new ListAccountMovementsUseCase(port);
}

export async function accountMovements(
  command: GetAccountMovementsCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<AccountMovement[]>> {
  const uc = createAccountMovementsUseCase(
    opts.provider,
    opts.operation ?? "accountMovements",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

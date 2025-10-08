import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { Account, GetConsolidatedAccountsCommand, ConsolidatedAccountsUseCase } from "../../core";
import { ConsolidatedAccountsDynamicAdapter } from "../..";

export function createConsolidatedAccountsUseCase(
  providerKey: string,
  operationKey = "consolidatedAccounts",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<Account[]>(providerKey, operationKey, adapterOptions);
  const port = new ConsolidatedAccountsDynamicAdapter(base);
  return new ConsolidatedAccountsUseCase(port);
}

export async function consolidatedAccounts(
  command: GetConsolidatedAccountsCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<Account[]>> {
  const uc = createConsolidatedAccountsUseCase(
    opts.provider,
    opts.operation ?? "consolidatedAccounts",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { Account, ListAccountsCommand, ListAccountsUseCase } from "../../core";
import { ClientAccountsDynamicAdapter } from "../../providers";

export function createClientAccountsUseCase(
  providerKey: string,
  operationKey = "clientAccounts",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<Account[]>(providerKey, operationKey, adapterOptions);
  const port = new ClientAccountsDynamicAdapter(base);
  return new ListAccountsUseCase(port);
}

export async function clientAccounts(
  command: ListAccountsCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<Account[]>> {
  const uc = createClientAccountsUseCase(
    opts.provider,
    opts.operation ?? "clientAccounts",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

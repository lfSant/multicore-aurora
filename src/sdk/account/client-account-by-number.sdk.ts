import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { Account, GetAccountByNumberCommand, GetAccountByNumberUseCase } from "../../core";
import { GetClientAccountDynamicAdapter } from "../..";

export function createGetClientAccountByNumberUseCase(
  providerKey: string,
  operationKey = "getClientAccountByNumber",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<Account>(providerKey, operationKey, adapterOptions);
  const port = new GetClientAccountDynamicAdapter(base);
  return new GetAccountByNumberUseCase(port);
}

export async function getClientAccountByNumber(
  command: GetAccountByNumberCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<Account>> {
  const uc = createGetClientAccountByNumberUseCase(
    opts.provider,
    opts.operation ?? "getClientAccountByNumber",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

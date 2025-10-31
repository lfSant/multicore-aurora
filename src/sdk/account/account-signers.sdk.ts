import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { GetAccountSignersCommand } from "../../core/application/dto/commands/GetAccountSigners.command";
import { AccountSignersInfo } from "../../core/application/dto/results/AccountSigner.result";
import { GetAccountSignersUseCase } from "../../core/application/use-cases/GetAccountSigners.usecase";
import { DynamicAccountSignersAdapter } from "../../providers/account/DynamicAccountSignersAdapter";

export function createAccountSignersUseCase(
  providerKey: string,
  operationKey = "getAccountSigners",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<AccountSignersInfo>(providerKey, operationKey, adapterOptions);
  const port = new DynamicAccountSignersAdapter(base);
  return new GetAccountSignersUseCase(port);
}

export async function getAccountSigners(
  command: GetAccountSignersCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<AccountSignersInfo>> {
  const uc = createAccountSignersUseCase(
    opts.provider,
    opts.operation ?? "getAccountSigners",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

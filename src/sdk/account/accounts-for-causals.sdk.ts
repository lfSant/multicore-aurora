import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { GetAccountsForCausalsUseCase } from "../../core/application/use-cases/GetAccountsForCausals.usecase";
import { GetAccountsForCausalsCommand } from "../../core/application/dto/commands/GetAccountsForCausals.command";
import { AccountForCausalResult } from "../../core/application/dto/results/AccountForCausal.result";
import { AccountsForCausalsDynamicAdapter } from "../../providers/account/AccountsForCausalsDynamicAdapter";

export function createGetAccountsForCausalsUseCase(
  providerKey: string,
  operationKey = "getAccountsForCausals",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<AccountForCausalResult>(providerKey, operationKey, adapterOptions);
  const port = new AccountsForCausalsDynamicAdapter(base);
  return new GetAccountsForCausalsUseCase(port);
}

export async function getAccountsForCausals(
  command: GetAccountsForCausalsCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<AccountForCausalResult>> {
  const uc = createGetAccountsForCausalsUseCase(
    opts.provider,
    opts.operation ?? "getAccountsForCausals",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

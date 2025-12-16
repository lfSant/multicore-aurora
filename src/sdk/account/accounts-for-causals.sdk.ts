import {
  GetAccountsForCausalsCommand,
  AccountForCausalResult,
  GetAccountsForCausalsUseCase,
} from "../../core";
import { AccountsForCausalsDynamicAdapter } from "../../providers";
import { ProviderCallConfig, CanonicalResponse } from "../../core";
import { createBaseDynamicAdapter } from "../common/factories";

export function createGetAccountsForCausalsUseCase(providerKey: string) {
  const baseAdapter = createBaseDynamicAdapter<AccountForCausalResult>(
    providerKey,
    "getAccountsForCausals"
  );
  const adapter = new AccountsForCausalsDynamicAdapter(baseAdapter);
  return new GetAccountsForCausalsUseCase(adapter);
}

export async function getAccountsForCausals(
  command: GetAccountsForCausalsCommand,
  http: ProviderCallConfig,
  options: { provider: string; tenant?: string; environment?: string }
): Promise<CanonicalResponse<AccountForCausalResult>> {
  const useCase = createGetAccountsForCausalsUseCase(options.provider);
  return useCase.execute(command, http);
}

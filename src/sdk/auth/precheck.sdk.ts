import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import { AuthPrecheckDynamicAdapter } from "../../providers/auth/DynamicAuthPrecheckAdapter";
import { AuthPrecheckUseCase } from "../../core/application/use-cases/AuthPrecheck.usecase";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { AuthPrecheckCommand } from "../../core/application/dto/commands/AuthPrecheck.command";
import type { CanonicalResponse } from "../../core/shared/types";
import type { AuthPrecheckStatus } from "../../core/application/dto/results/AuthPrecheck.result";

export function createAuthPrecheckUseCase(
  providerKey: string,
  operationKey = "authPrecheck",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<AuthPrecheckStatus>(providerKey, operationKey, adapterOptions);
  const port = new AuthPrecheckDynamicAdapter(base);
  return new AuthPrecheckUseCase(port);
}

export async function authPrecheck(
  command: AuthPrecheckCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<AuthPrecheckStatus>> {
  const uc = createAuthPrecheckUseCase(
    opts.provider,
    opts.operation ?? "authPrecheck",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

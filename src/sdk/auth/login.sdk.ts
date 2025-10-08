import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import { AuthLoginDynamicAdapter } from "../../providers/auth/DynamicAuthLoginAdapter";
import { AuthLoginUseCase } from "../../core/application/use-cases/AuthLogin.usecase";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { AuthLoginCommand } from "../../core/application/dto/commands/AuthLogin.command";
import type { CanonicalResponse } from "../../core/shared/types";
import type { AuthLogin } from "../../core/application/dto/results/AuthLogin.result";

export function createAuthLoginUseCase(
  providerKey: string,
  operationKey = "authLogin",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<AuthLogin>(providerKey, operationKey, adapterOptions);
  const port = new AuthLoginDynamicAdapter(base);
  return new AuthLoginUseCase(port);
}

export async function authLogin(
  command: AuthLoginCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<AuthLogin>> {
  const uc = createAuthLoginUseCase(
    opts.provider,
    opts.operation ?? "authLogin",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

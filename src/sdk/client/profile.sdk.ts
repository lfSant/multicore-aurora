import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import { DynamicClientProfileAdapter } from "../../providers/client/DynamicClientProfileAdapter";
import { GetClientProfileUseCase } from "../../core/application/use-cases/GetClientProfile.usecase";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { GetClientProfileCommand } from "../../core/application/dto/commands/GetClientProfile.command";
import type { CanonicalResponse } from "../../core/shared/types";
import type { ClientProfile } from "../../core/application/dto/results/ClientProfile.result";

export function createClientProfileUseCase(
  providerKey: string,
  operationKey = "getClientProfile",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<ClientProfile>(providerKey, operationKey, adapterOptions);
  const port = new DynamicClientProfileAdapter(base);
  return new GetClientProfileUseCase(port);
}

export async function getClientProfile(
  command: GetClientProfileCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<ClientProfile>> {
  const uc = createClientProfileUseCase(
    opts.provider,
    opts.operation ?? "getClientProfile",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

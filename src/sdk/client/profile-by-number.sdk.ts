import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import { DynamicClientProfileByNumberAdapter } from "../../providers/client/DynamicClientProfileByNumberAdapter";
import { GetClientProfileByNumberUseCase } from "../../core/application/use-cases/GetClientProfileByNumber.usecase";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { GetClientProfileByNumberCommand } from "../../core/application/dto/commands/GetClientProfileByNumber.command";
import type { CanonicalResponse } from "../../core/shared/types";
import type { ClientProfileByNumber } from "../../core/application/dto/results/ClientProfileByNumber.result";

export function createClientProfileByNumberUseCase(
  providerKey: string,
  operationKey = "getClientProfileByNumber",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<ClientProfileByNumber>(providerKey, operationKey, adapterOptions);
  const port = new DynamicClientProfileByNumberAdapter(base);
  return new GetClientProfileByNumberUseCase(port);
}

export async function getClientProfileByNumber(
  command: GetClientProfileByNumberCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<ClientProfileByNumber>> {
  const uc = createClientProfileByNumberUseCase(
    opts.provider,
    opts.operation ?? "getClientProfileByNumber",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

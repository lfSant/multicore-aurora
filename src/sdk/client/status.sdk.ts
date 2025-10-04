import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import { ClientStatusDynamicAdapter } from "../../providers/client/DynamicClientStatusAdapter";
import { CheckClientActiveUseCase } from "../../core/application/use-cases/CheckClientActive.usecase";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CheckClientActiveCommand } from "../../core/application/dto/commands/CheckClientActive.command";
import type { CanonicalResponse } from "../../core/shared/types";
import type { ClientActiveStatus } from "../../core/application/dto/results/ClientActiveStatus.result";

export function createClientStatusUseCase(
  providerKey: string,
  operationKey = "existsActive",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<ClientActiveStatus>(providerKey, operationKey, adapterOptions);
  const port = new ClientStatusDynamicAdapter(base);
  return new CheckClientActiveUseCase(port);
}

export async function checkClientStatus(
  command: CheckClientActiveCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<ClientActiveStatus>> {
  const uc = createClientStatusUseCase(
    opts.provider,
    opts.operation ?? "existsActive",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

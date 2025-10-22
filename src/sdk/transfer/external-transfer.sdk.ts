import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { CreateExternalTransferUseCase } from "../../core/application/use-cases/CreateExternalTransfer.usecase";
import { ExternalTransferCommand } from "../../core/application/dto/commands/ExternalTransfer.command";
import { ExternalTransferResult } from "../../core/application/dto/results/ExternalTransfer.result";
import { DynamicExternalTransferAdapter } from "../../providers/transfer/DynamicExternalTransferAdapter";

export function createExternalTransferUseCase(
  providerKey: string,
  operationKey = "createExternalTransfer",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<ExternalTransferResult>(providerKey, operationKey, adapterOptions);
  const port = new DynamicExternalTransferAdapter(base);
  return new CreateExternalTransferUseCase(port);
}

export async function createExternalTransfer(
  command: ExternalTransferCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<ExternalTransferResult>> {
  const uc = createExternalTransferUseCase(
    opts.provider,
    opts.operation ?? "createExternalTransfer",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

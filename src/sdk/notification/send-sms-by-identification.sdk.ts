import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import { SendSmsByIdentificationDynamicAdapter } from "../../providers/notification/DynamicSendSmsByIdentificationAdapter";
import { SendSmsByIdentificationUseCase } from "../../core/application/use-cases/SendSmsByIdentification.usecase";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { SendSmsByIdentificationCommand } from "../../core/application/dto/commands/SendSmsByIdentification.command";
import type { CanonicalResponse } from "../../core/shared/types";
import type { SendSmsByIdentificationResult } from "../../core/application/dto/results/SendSmsByIdentification.result";

export function createSendSmsByIdentificationUseCase(
  providerKey: string,
  operationKey = "sendSmsByIdentification",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<SendSmsByIdentificationResult>(providerKey, operationKey, adapterOptions);
  const port = new SendSmsByIdentificationDynamicAdapter(base);
  return new SendSmsByIdentificationUseCase(port);
}

export async function sendSmsByIdentification(
  command: SendSmsByIdentificationCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<SendSmsByIdentificationResult>> {
  const uc = createSendSmsByIdentificationUseCase(
    opts.provider,
    opts.operation ?? "sendSmsByIdentification",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

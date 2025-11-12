import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import { SendSmsByPhoneDynamicAdapter } from "../../providers/notification/DynamicSendSmsByPhoneAdapter";
import { SendSmsByPhoneUseCase } from "../../core/application/use-cases/SendSmsByPhone.usecase";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { SendSmsByPhoneCommand } from "../../core/application/dto/commands/SendSmsByPhone.command";
import type { CanonicalResponse } from "../../core/shared/types";
import type { SendSmsByIdentificationResult } from "../../core/application/dto/results/SendSmsByIdentification.result";

export function createSendSmsByPhoneUseCase(
  providerKey: string,
  operationKey = "sendSmsByPhone",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<SendSmsByIdentificationResult>(providerKey, operationKey, adapterOptions);
  const port = new SendSmsByPhoneDynamicAdapter(base);
  return new SendSmsByPhoneUseCase(port);
}

export async function sendSmsByPhone(
  command: SendSmsByPhoneCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<SendSmsByIdentificationResult>> {
  const uc = createSendSmsByPhoneUseCase(
    opts.provider,
    opts.operation ?? "sendSmsByPhone",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

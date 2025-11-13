import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { ProcessPaymentServiceCommand, ProcessPaymentServiceResult, ProcessPaymentServiceUseCase } from "../../core";
import { ProcessPaymentServiceDynamicAdapter } from "../..";

export function createProcessPaymentServiceUseCase(
  providerKey: string,
  operationKey = "processPaymentService",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<ProcessPaymentServiceResult>(providerKey, operationKey, adapterOptions);
  const port = new ProcessPaymentServiceDynamicAdapter(base);
  return new ProcessPaymentServiceUseCase(port);
}

export async function processPaymentService(
  command: ProcessPaymentServiceCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<ProcessPaymentServiceResult>> {
  const uc = createProcessPaymentServiceUseCase(
    opts.provider,
    opts.operation ?? "processPaymentService",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

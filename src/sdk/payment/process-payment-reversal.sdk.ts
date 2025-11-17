import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { ProcessPaymentReversalCommand, ProcessPaymentReversalResult, ProcessPaymentReversalUseCase } from "../../core";
import { ProcessPaymentReversalDynamicAdapter } from "../..";

export function createProcessPaymentReversalUseCase(
  providerKey: string,
  operationKey = "processPaymentReversal",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<ProcessPaymentReversalResult>(providerKey, operationKey, adapterOptions);
  const port = new ProcessPaymentReversalDynamicAdapter(base);
  return new ProcessPaymentReversalUseCase(port);
}

export async function processPaymentReversal(
  command: ProcessPaymentReversalCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<ProcessPaymentReversalResult>> {
  const uc = createProcessPaymentReversalUseCase(
    opts.provider,
    opts.operation ?? "processPaymentReversal",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { GetPaymentReversalsCommand, PaymentReversalsResult, GetPaymentReversalsUseCase } from "../../core";
import { PaymentReversalsDynamicAdapter } from "../../providers";

export function createPaymentReversalsUseCase(
  providerKey: string,
  operationKey = "getPaymentReversals",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<PaymentReversalsResult>(providerKey, operationKey, adapterOptions);
  const port = new PaymentReversalsDynamicAdapter(base);
  return new GetPaymentReversalsUseCase(port);
}

export async function getPaymentReversals(
  command: GetPaymentReversalsCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<PaymentReversalsResult>> {
  const uc = createPaymentReversalsUseCase(
    opts.provider,
    opts.operation ?? "getPaymentReversals",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

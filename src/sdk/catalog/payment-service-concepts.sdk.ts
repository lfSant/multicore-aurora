import {
  createBaseDynamicAdapter,
  AdapterFactoryOptions,
} from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import {
  PaymentServiceConcepts,
  PaymentServiceConceptsUseCase,
} from "../../core";
import { PaymentServiceConceptsDynamicAdapter } from "../../providers";

export function findPaymentServiceConceptsUseCase(
  providerKey: string,
  operationKey = "getPaymentServiceConcepts",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<PaymentServiceConcepts[]>(
    providerKey,
    operationKey,
    adapterOptions
  );
  const port = new PaymentServiceConceptsDynamicAdapter(base);
  return new PaymentServiceConceptsUseCase(port);
}

export async function getPaymentServiceConcepts(
  http: ProviderCallConfig,
  opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
  }
): Promise<CanonicalResponse<PaymentServiceConcepts[]>> {
  const uc = findPaymentServiceConceptsUseCase(
    opts.provider,
    opts.operation ?? "getPaymentServiceConcepts",
    opts.adapterOptions
  );
  return uc.execute(http);
}

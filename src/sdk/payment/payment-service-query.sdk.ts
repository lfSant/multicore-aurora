import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { GetPaymentServiceQueryCommand, PaymentServiceQueryResult, GetPaymentServiceQueryUseCase } from "../../core";
import { PaymentServiceQueryDynamicAdapter } from "../..";

export function createPaymentServiceQueryUseCase(
  providerKey: string,
  operationKey = "getPaymentServiceQuery",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<PaymentServiceQueryResult>(providerKey, operationKey, adapterOptions);
  const port = new PaymentServiceQueryDynamicAdapter(base);
  return new GetPaymentServiceQueryUseCase(port);
}

export async function getPaymentServiceQuery(
  command: GetPaymentServiceQueryCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<PaymentServiceQueryResult>> {
  const uc = createPaymentServiceQueryUseCase(
    opts.provider,
    opts.operation ?? "getPaymentServiceQuery",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

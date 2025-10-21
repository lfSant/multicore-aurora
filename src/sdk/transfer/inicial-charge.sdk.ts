import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import { ListTransferInitialChargeProductsUseCase } from "../../core/application/use-cases/ListTransferInitialChargeProducts.usecase";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import {ItemTransferInitialCharge, TransferInitialChargeBuckets, TransferInitialChargeDynamicAdapter } from "../..";

export function getListTransferInitialChargeUseCase(
  providerKey: string,
  operationKey = "transferInitialCharge",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<ItemTransferInitialCharge>(providerKey, operationKey, adapterOptions);
  const port = new TransferInitialChargeDynamicAdapter(base);
  return new ListTransferInitialChargeProductsUseCase(port);
}

export async function listTransferInitialCharge(
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<TransferInitialChargeBuckets>> {
  const uc = getListTransferInitialChargeUseCase(
    opts.provider,
    opts.operation ?? "transferInitialCharge",
    opts.adapterOptions
  );
  return uc.execute(http);
}

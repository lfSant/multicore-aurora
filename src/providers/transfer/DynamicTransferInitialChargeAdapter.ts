import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ItemTransferInitialCharge, TransferInitialChargeProviderPort } from "../../core";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class TransferInitialChargeDynamicAdapter implements TransferInitialChargeProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<ItemTransferInitialCharge>) {}

  getTransferInitialCharge(
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ItemTransferInitialCharge>> {
    return this.base.run({}, http, options);
  }
}

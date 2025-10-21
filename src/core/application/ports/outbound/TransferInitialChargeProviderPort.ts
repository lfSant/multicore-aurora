import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { ItemTransferInitialCharge } from "../../dto/results/TransferInitialCharge.result";

export interface TransferInitialChargeProviderPort {
  getTransferInitialCharge(
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ItemTransferInitialCharge>>;
}

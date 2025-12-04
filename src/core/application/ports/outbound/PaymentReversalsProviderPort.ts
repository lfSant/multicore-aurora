import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { GetPaymentReversalsCommand } from "../../dto/commands/GetPaymentReversals.command";
import { PaymentReversalsResult } from "../../dto/results/PaymentReversals.result";

export interface PaymentReversalsProviderPort {
  getPaymentReversals(
    cmd: GetPaymentReversalsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<PaymentReversalsResult>>;
}

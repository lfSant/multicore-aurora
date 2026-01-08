import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { GetPaymentReversalsCommand } from "../../core/application/dto/commands/GetPaymentReversals.command";
import { PaymentReversalsProviderPort } from "../../core/application/ports/outbound/PaymentReversalsProviderPort";
import { PaymentReversalsResult } from "../../core/application/dto/results/PaymentReversals.result";

export class PaymentReversalsDynamicAdapter implements PaymentReversalsProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<PaymentReversalsResult>) {}

  getPaymentReversals(
    cmd: GetPaymentReversalsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<PaymentReversalsResult>> {
    return this.base.run(cmd, http, options);
  }
}

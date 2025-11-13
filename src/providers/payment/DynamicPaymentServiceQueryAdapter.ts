import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { GetPaymentServiceQueryCommand, PaymentServiceQueryProviderPort, PaymentServiceQueryResult } from "../..";

export class PaymentServiceQueryDynamicAdapter implements PaymentServiceQueryProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<PaymentServiceQueryResult>) {}

  getPaymentServiceQuery(
    cmd: GetPaymentServiceQueryCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<PaymentServiceQueryResult>> {
    return this.base.run(cmd, http, options);
  }
}

import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { GetPaymentServiceQueryCommand } from "../../core/application/dto/commands/GetPaymentServiceQuery.command";
import { PaymentServiceQueryProviderPort } from "../../core/application/ports/outbound/PaymentServiceQueryProviderPort";
import { PaymentServiceQueryResult } from "../../core/application/dto/results/PaymentServiceQuery.result";

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

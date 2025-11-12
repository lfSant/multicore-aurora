import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { PaymentServiceConcepts } from "../../core/application/dto/results/PaymentServiceConcepts.result";
import { PaymentServiceConceptsProviderPort } from "../../core/application/ports/outbound/PaymentServiceConceptsProviderPort";

export class PaymentServiceConceptsDynamicAdapter
  implements PaymentServiceConceptsProviderPort
{
  constructor(
    private readonly base: BaseDynamicAdapter<PaymentServiceConcepts[]>
  ) {}

  getPaymentServiceConcepts(
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<PaymentServiceConcepts[]>> {
    return this.base.run({}, http, options);
  }
}

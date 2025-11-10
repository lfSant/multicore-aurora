import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { PaymentServiceConcepts } from "../../dto/results/PaymentServiceConcepts.result";

export interface PaymentServiceConceptsProviderPort {
  getPaymentServiceConcepts(
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<PaymentServiceConcepts[]>>;
}

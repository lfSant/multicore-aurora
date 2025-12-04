import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { GetPaymentServiceQueryCommand } from "../../dto/commands/GetPaymentServiceQuery.command";
import { PaymentServiceQueryResult } from "../../dto/results/PaymentServiceQuery.result";

export interface PaymentServiceQueryProviderPort {
  getPaymentServiceQuery(
    cmd: GetPaymentServiceQueryCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<PaymentServiceQueryResult>>;
}

import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { ProcessPaymentServiceCommand, ProcessPaymentServiceProviderPort, ProcessPaymentServiceResult } from "../..";

export class ProcessPaymentServiceDynamicAdapter implements ProcessPaymentServiceProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<ProcessPaymentServiceResult>) {}

  processPaymentService(
    cmd: ProcessPaymentServiceCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ProcessPaymentServiceResult>> {
    return this.base.run(cmd, http, options);
  }
}

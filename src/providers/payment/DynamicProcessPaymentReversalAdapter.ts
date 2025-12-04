import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { ProcessPaymentReversalCommand, ProcessPaymentReversalProviderPort, ProcessPaymentReversalResult } from "../..";

export class ProcessPaymentReversalDynamicAdapter implements ProcessPaymentReversalProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<ProcessPaymentReversalResult>) {}

  processPaymentReversal(
    cmd: ProcessPaymentReversalCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ProcessPaymentReversalResult>> {
    return this.base.run(cmd, http, options);
  }
}

import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { ProcessPaymentReversalCommand } from "../../core/application/dto/commands/ProcessPaymentReversal.command";
import { ProcessPaymentReversalResult } from "../../core/application/dto/results/ProcessPaymentReversal.result";
import { ProcessPaymentReversalProviderPort } from "../../core/application/ports/outbound/ProcessPaymentReversalProviderPort";

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

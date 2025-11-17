import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { ProcessPaymentReversalCommand } from "../../dto/commands/ProcessPaymentReversal.command";
import { ProcessPaymentReversalResult } from "../../dto/results/ProcessPaymentReversal.result";

export interface ProcessPaymentReversalProviderPort {
  processPaymentReversal(
    cmd: ProcessPaymentReversalCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ProcessPaymentReversalResult>>;
}

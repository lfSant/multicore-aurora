import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { ProcessPaymentServiceCommand } from "../../dto/commands/ProcessPaymentService.command";
import { ProcessPaymentServiceResult } from "../../dto/results/ProcessPaymentService.result";

export interface ProcessPaymentServiceProviderPort {
  processPaymentService(
    cmd: ProcessPaymentServiceCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ProcessPaymentServiceResult>>;
}

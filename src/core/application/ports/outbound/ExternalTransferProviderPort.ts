import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { ExternalTransferCommand } from "../../dto/commands/ExternalTransfer.command";
import { ExternalTransferResult } from "../../dto/results/ExternalTransfer.result";

export interface ExternalTransferProviderPort {
  createExternalTransfer(
    cmd: ExternalTransferCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ExternalTransferResult>>;
}

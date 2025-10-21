import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { InternalTransferCommand } from "../../dto/commands/InternalTransfer.command";
import { InternalTransferResult } from "../../dto/results/InternalTransfer.result";

export interface InternalTransferProviderPort {
  createInternalTransfer(
    cmd: InternalTransferCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<InternalTransferResult>>;
}

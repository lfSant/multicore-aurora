import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { InternalTransferCommand } from "../../core/application/dto/commands/InternalTransfer.command";
import { InternalTransferResult } from "../../core/application/dto/results/InternalTransfer.result";
import { InternalTransferProviderPort } from "../../core/application/ports/outbound/InternalTransferProviderPort";

export class InternalTransferDynamicAdapter implements InternalTransferProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<InternalTransferResult>) {}

  createInternalTransfer(
    cmd: InternalTransferCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<InternalTransferResult>> {
    return this.base.run(cmd, http, options);
  }
}

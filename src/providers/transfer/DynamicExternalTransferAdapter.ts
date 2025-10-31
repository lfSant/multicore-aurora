import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { ExternalTransferCommand } from "../../core/application/dto/commands/ExternalTransfer.command";
import { ExternalTransferProviderPort } from "../../core/application/ports/outbound/ExternalTransferProviderPort";
import { ExternalTransferResult } from "../../core/application/dto/results/ExternalTransfer.result";

export class ExternalTransferDynamicAdapter implements ExternalTransferProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<ExternalTransferResult>) {}

  createExternalTransfer(
    cmd: ExternalTransferCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ExternalTransferResult>> {
    return this.base.run(cmd, http, options);
  }
}

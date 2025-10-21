import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { InternalTransferCommand, InternalTransferProviderPort, InternalTransferResult,  } from "../..";

export class DynamicInternalTransferAdapter implements InternalTransferProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<InternalTransferResult>) {}

  createInternalTransfer(
    cmd: InternalTransferCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<InternalTransferResult>> {
    return this.base.run(cmd, http, options);
  }
}

import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { SendSmsByIdentificationProviderPort } from "../../core/application/ports/outbound/SendSmsByIdentificationProviderPort";
import { SendSmsByIdentificationCommand } from "../../core/application/dto/commands/SendSmsByIdentification.command";
import { SendSmsByIdentificationResult } from "../../core/application/dto/results/SendSmsByIdentification.result";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class SendSmsByIdentificationDynamicAdapter implements SendSmsByIdentificationProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<SendSmsByIdentificationResult>) {}

  sendSms(
    cmd: SendSmsByIdentificationCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<SendSmsByIdentificationResult>> {
    return this.base.run(cmd, http, options);
  }
}

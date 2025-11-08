import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { SendSmsByPhoneProviderPort } from "../../core/application/ports/outbound/SendSmsByPhoneProviderPort";
import { SendSmsByPhoneCommand } from "../../core/application/dto/commands/SendSmsByPhone.command";
import { SendSmsByIdentificationResult } from "../../core/application/dto/results/SendSmsByIdentification.result";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class SendSmsByPhoneDynamicAdapter implements SendSmsByPhoneProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<SendSmsByIdentificationResult>) {}

  sendSmsByPhone(
    cmd: SendSmsByPhoneCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<SendSmsByIdentificationResult>> {
    return this.base.run(cmd, http, options);
  }
}

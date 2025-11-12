import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { SendSmsByPhoneCommand } from "../../dto/commands/SendSmsByPhone.command";
import { SendSmsByIdentificationResult } from "../../dto/results/SendSmsByIdentification.result";

export interface SendSmsByPhoneProviderPort {
  sendSmsByPhone(
    cmd: SendSmsByPhoneCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<SendSmsByIdentificationResult>>;
}

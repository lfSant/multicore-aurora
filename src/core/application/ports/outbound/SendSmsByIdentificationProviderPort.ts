import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { SendSmsByIdentificationCommand } from "../../dto/commands/SendSmsByIdentification.command";
import { SendSmsByIdentificationResult } from "../../dto/results/SendSmsByIdentification.result";

export interface SendSmsByIdentificationProviderPort {
  sendSms(
    cmd: SendSmsByIdentificationCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<SendSmsByIdentificationResult>>;
}

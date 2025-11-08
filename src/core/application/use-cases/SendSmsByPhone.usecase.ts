import { SendSmsByPhoneCommand } from "../dto/commands/SendSmsByPhone.command";
import { SendSmsByIdentificationResult } from "../dto/results/SendSmsByIdentification.result";
import { SendSmsByPhoneProviderPort } from "../ports/outbound/SendSmsByPhoneProviderPort";
import { SendSmsByPhoneCommandSchema } from "../validation/send-sms-by-phone.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class SendSmsByPhoneUseCase {
  constructor(private readonly provider: SendSmsByPhoneProviderPort) {}

  async execute(
    cmd: SendSmsByPhoneCommand,
    http: ProviderCallConfig
  ): Promise<CanonicalResponse<SendSmsByIdentificationResult>> {
    try {
      const parsed = SendSmsByPhoneCommandSchema.parse(cmd);
      const result = await this.provider.sendSmsByPhone(parsed, http);
      return successResponse<SendSmsByIdentificationResult>(result.items, {
        client: `SMS enviado correctamente al número ${parsed.phoneNumber}.`,
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: 200,
        raw: result.raw ? [result.raw] : undefined,
        aditionalData: result?.aditionalData || {},
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<SendSmsByIdentificationResult>(
          e.clientMessage || "No se pudo enviar el SMS",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<SendSmsByIdentificationResult>(
        "Servicio de envío de SMS temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

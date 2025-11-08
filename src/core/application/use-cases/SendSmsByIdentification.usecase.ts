import { SendSmsByIdentificationCommand } from "../dto/commands/SendSmsByIdentification.command";
import { SendSmsByIdentificationResult } from "../dto/results/SendSmsByIdentification.result";
import { SendSmsByIdentificationProviderPort } from "../ports/outbound/SendSmsByIdentificationProviderPort";
import { SendSmsByIdentificationCommandSchema } from "../validation/send-sms-by-identification.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class SendSmsByIdentificationUseCase {
  constructor(private readonly provider: SendSmsByIdentificationProviderPort) {}

  async execute(
    cmd: SendSmsByIdentificationCommand,
    http: ProviderCallConfig
  ): Promise<CanonicalResponse<SendSmsByIdentificationResult>> {
    try {
      const parsed = SendSmsByIdentificationCommandSchema.parse(cmd);
      const result = await this.provider.sendSms(parsed, http);
      return successResponse<SendSmsByIdentificationResult>(result.items, {
        client: `SMS enviado correctamente.`,
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

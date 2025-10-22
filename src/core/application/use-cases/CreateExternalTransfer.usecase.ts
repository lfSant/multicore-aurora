import { ExternalTransferCommand } from "../dto/commands/ExternalTransfer.command";
import { ExternalTransferResult } from "../dto/results/ExternalTransfer.result";
import { ExternalTransferProviderPort } from "../ports/outbound/ExternalTransferProviderPort";
import { ExternalTransferCommandSchema } from "../validation/external-transfer.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class CreateExternalTransferUseCase {
  constructor(private readonly provider: ExternalTransferProviderPort) {}

  async execute(
    cmd: ExternalTransferCommand,
    http: ProviderCallConfig
  ): Promise<CanonicalResponse<ExternalTransferResult>> {
    try {
      const parsed = ExternalTransferCommandSchema.parse(cmd);
      const result = await this.provider.createExternalTransfer(parsed, http);
      return successResponse<ExternalTransferResult>(result.items, {
        client: `Transferencia externa exitosa`,
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: 200,
        raw: result.raw ? [result.raw] : undefined,
        aditionalData: result?.aditionalData || {},
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<ExternalTransferResult>(
          e.clientMessage || "Transferencia externa fallida",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<ExternalTransferResult>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

import { CheckClientActiveCommand } from "../dto/commands/CheckClientActive.command";
import { ClientActiveStatus } from "../dto/results/ClientActiveStatus.result";
import { ClientStatusProviderPort } from "../ports/outbound/ClientStatusProviderPort";
import { CheckClientActiveCommandSchema } from "../validation/check-client-active.schema";
import { CanonicalResponse, errorResponse, successResponse } from "../../shared/envelope";
import { ProviderCallConfig } from "../../shared/http";
import { ProviderHttpError } from "../../shared/errors";

export class CheckClientActiveUseCase {
  constructor(private readonly provider: ClientStatusProviderPort) {}

  async execute(
    cmd: CheckClientActiveCommand,
    http: ProviderCallConfig
  ): Promise<CanonicalResponse<ClientActiveStatus>> {
    try {
      const parsed = CheckClientActiveCommandSchema.parse(cmd);
      const items = await this.provider.existsActive(parsed, http);
      return successResponse<ClientActiveStatus>(items, {
        client: "Parámetros del usuario obtenidos correctamente"
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<ClientActiveStatus>(
          e.status || 502,
          "No se pudo completar la operación",
          e.message
        );
      }
      // Zod u otros errores inesperados
      return errorResponse<ClientActiveStatus>(
        400,
        "Solicitud inválida",
        e?.message ?? "Error de validación"
      );
    }
  }
}

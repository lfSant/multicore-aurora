// core/application/use-cases/CheckClientActive.usecase.ts
import { CheckClientActiveCommandSchema } from "../validation/check-client-active.schema";
import { CheckClientActiveCommand } from "../dto/commands/CheckClientActive.command";
import { ClientStatusProviderPort } from "../ports/outbound/ClientStatusProviderPort";
import { ClientActiveStatus } from "../dto/results/ClientActiveStatus.result";
import { CanonicalResponse, successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";
import { ProviderCallConfig } from "../../shared/http";

export class CheckClientActiveUseCase {
  constructor(private readonly provider: ClientStatusProviderPort) {}

  async execute(
    cmd: CheckClientActiveCommand,
    http: ProviderCallConfig
  ): Promise<CanonicalResponse<ClientActiveStatus>> {
    try {
      const parsed = CheckClientActiveCommandSchema.parse(cmd);
      const result = await this.provider.existsActive(parsed, http);

      return successResponse<ClientActiveStatus>(
        result.items,
        {
          client: "Parámetros del usuario obtenidos correctamente",
          server: `Servicio de ${result.provider ?? 'proveedor'} ejecutado correctamente.`
        },
        {
          code: "SRV-S2000",
          status: 200,
          raw: result.raw ? [result.raw] : undefined,
        }
      );
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<ClientActiveStatus>(
          e.status || 502,
          "Verificación de cliente temporalmente no disponible",
          e.message,
          {
            code: "SRV-S5000",
            raw: e.raw ? [e.raw] : undefined,
          }
        );
      }
      return errorResponse<ClientActiveStatus>(
        400,
        "Solicitud inválida",
        e?.message ?? "Error de validación",
        { code: "SRV-S5000" }
      );
    }
  }
}

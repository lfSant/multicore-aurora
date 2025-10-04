import { GetClientProfileCommand } from "../dto/commands/GetClientProfile.command";
import { ClientProfile } from "../dto/results/ClientProfile.result";
import { ClientProfileProviderPort } from "../ports/outbound/ClientProfileProviderPort";
import { GetClientProfileCommandSchema } from "../validation/get-client-profile.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class GetClientProfileUseCase {
  constructor(private readonly provider: ClientProfileProviderPort) { }

  async execute(
    cmd: GetClientProfileCommand,
    http: ProviderCallConfig,
  ): Promise<CanonicalResponse<ClientProfile>> {
    const parsed = GetClientProfileCommandSchema.parse(cmd);
    try {
      const result = await this.provider.getProfile(parsed, http);
      return successResponse<ClientProfile>(result.items, {
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: 200,
        raw: result.raw ? [result.raw] : undefined,
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<ClientProfile>(
          e.clientMessage || "Parámetros del usuario temporalmente no disponibles",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<ClientProfile>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

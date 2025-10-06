import { GetClientProfileByNumberCommand } from "../dto/commands/GetClientProfileByNumber.command";
import { ClientProfileByNumber } from "../dto/results/ClientProfileByNumber.result";
import { ClientProfileByNumberProviderPort } from "../ports/outbound/ClientProfileByNumberProviderPort";
import { GetClientProfileByNumberCommandSchema } from "../validation/get-client-profile-by-number.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class GetClientProfileByNumberUseCase {
  constructor(private readonly provider: ClientProfileByNumberProviderPort) { }

  async execute(
    cmd: GetClientProfileByNumberCommand,
    http: ProviderCallConfig,
  ): Promise<CanonicalResponse<ClientProfileByNumber>> {
    const parsed = GetClientProfileByNumberCommandSchema.parse(cmd);
    try {
      const result = await this.provider.getProfile(parsed, http);
      return successResponse<ClientProfileByNumber>(result.items, {
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: 200,
        raw: result.raw ? [result.raw] : undefined,
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<ClientProfileByNumber>(
          e.clientMessage || "Datos del usuario temporalmente no disponibles",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<ClientProfileByNumber>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

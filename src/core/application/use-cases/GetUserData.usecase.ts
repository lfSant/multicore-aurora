import { GetUserDataCommand } from "../dto/commands/GetUserData.command";
import { UserDataResult } from "../dto/results/UserData.result";
import { GetUserDataProviderPort } from "../ports/outbound/GetUserDataProviderPort";
import { GetUserDataCommandSchema } from "../validation/get-user-data.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class GetUserDataUseCase {
  constructor(private readonly provider: GetUserDataProviderPort) {}

  async execute(
    cmd: GetUserDataCommand,
    http: ProviderCallConfig,
  ): Promise<CanonicalResponse<UserDataResult>> {
    try {
      const parsed = GetUserDataCommandSchema.parse(cmd);
      const result = await this.provider.getUserData(parsed, http);

      return successResponse<UserDataResult>(result.items, {
        client: "Datos de usuario obtenidos exitosamente",
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: result.status || 200,
        raw: result.raw ? [result.raw] : undefined,
        aditionalData: result.aditionalData || {},
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<UserDataResult>(
          e.clientMessage || "No se pudieron obtener los datos del usuario",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<UserDataResult>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

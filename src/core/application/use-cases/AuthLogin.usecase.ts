import { LoginCommand, LoginCommandSchema } from "../../application/validation/login.schema";
import { AuthLoginProviderPort } from "../../application/ports/outbound/AuthLoginProviderPort";
import { LoginResult } from "../../application/dto/results/Login.result";
import { CanonicalResponse, successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";
import { ProviderCallConfig } from "../../shared/http";

export class AuthLoginUseCase {
  constructor(private readonly provider: AuthLoginProviderPort) {}

  async execute(
    cmd: LoginCommand,
    http: ProviderCallConfig
  ): Promise<CanonicalResponse<LoginResult>> {
    try {
      const parsed = LoginCommandSchema.parse(cmd);
      const items = await this.provider.login(parsed, http);
      return successResponse<LoginResult>(items, {
        client: "Parámetros del usuario obtenidos correctamente",
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<LoginResult>(
          e.status || 502,
          "No se pudo completar la operación",
          e.message
        );
      }
      return errorResponse<LoginResult>(
        400,
        "Solicitud inválida",
        e?.message ?? "Error de validación"
      );
    }
  }
}

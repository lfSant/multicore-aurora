import { AuthCoreActiveCommand, AuthCoreActiveCommandSchema } from "../validation/auth-core-active.schema";
import { AuthProviderPort } from "../ports/outbound/AuthProviderPort";
import { AuthCoreActiveStatus } from "../dto/results/AuthCoreActiveStatus.result";
import { CanonicalResponse, successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";
import { ProviderCallConfig } from "../../shared/http";

export class AuthCoreActiveUseCase {
  constructor(private readonly provider: AuthProviderPort) {}

  async execute(
    cmd: AuthCoreActiveCommand,
    http: ProviderCallConfig
  ): Promise<CanonicalResponse<AuthCoreActiveStatus>> {
    try {
      const parsed = AuthCoreActiveCommandSchema.parse(cmd);
      const items = await this.provider.authUserActive(parsed, http);
      return successResponse<AuthCoreActiveStatus>(items, {
        client: "Verificación de usuario realizada correctamente"
      });
    } catch (error: any) {
      console.error(`Error en AuthCoreActiveUseCase: ${error?.message || error}`);
      if (error instanceof ProviderHttpError) {
        return errorResponse<AuthCoreActiveStatus>(
          error.status || 502,
          "No se pudo completar la operación",
          error.message
        );
      }
      return errorResponse<AuthCoreActiveStatus>(
        400,
        "Solicitud inválida",
        error?.message ?? "Error de validación"
      );
    }
  }
}

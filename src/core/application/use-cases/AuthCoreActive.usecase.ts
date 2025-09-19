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
        client: "Parámetros del usuario obtenidos correctamente"
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<AuthCoreActiveStatus>(
          e.status || 502,
          "No se pudo completar la operación",
          e.message
        );
      }
      return errorResponse<AuthCoreActiveStatus>(
        400,
        "Solicitud inválida",
        e?.message ?? "Error de validación"
      );
    }
  }
}

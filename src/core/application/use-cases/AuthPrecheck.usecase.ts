import { AuthPrecheckCommand } from "../dto/commands/AuthPrecheck.command";
import { AuthPrecheckStatus } from "../dto/results/AuthPrecheck.result";
import { AuthPrecheckProviderPort } from "../ports/outbound/AuthPrecheckProviderPort";
import { AuthPrecheckCommandSchema } from "../validation/auth-precheck.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class AuthPrecheckUseCase {
    constructor(private readonly provider: AuthPrecheckProviderPort) { }
    async execute(
        cmd: AuthPrecheckCommand,
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<AuthPrecheckStatus>> {
        try {
            const parsed = AuthPrecheckCommandSchema.parse(cmd);
            const result = await this.provider.preCheck(parsed, http);
            return successResponse<AuthPrecheckStatus>(result.items, {
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
                aditionalData: result?.aditionalData || {},
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<AuthPrecheckStatus>(
                    "Validación de pre autenticación fallida",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<AuthPrecheckStatus>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}
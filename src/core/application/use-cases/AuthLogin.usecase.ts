import { AuthLoginCommand } from "../dto/commands/AuthLogin.command";
import { AuthLogin } from "../dto/results/AuthLogin.result";
import { AuthLoginProviderPort } from "../ports/outbound/AuthLoginProviderPort";
import { AuthLoginCommandSchema } from "../validation/auth-login.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class AuthLoginUseCase {
    constructor(private readonly provider: AuthLoginProviderPort) { }
    async execute(
        cmd: AuthLoginCommand,
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<AuthLogin>> {
        try {
            const parsed = AuthLoginCommandSchema.parse(cmd);
            const result = await this.provider.login(parsed, http);
            return successResponse<AuthLogin>(result.items, {
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
                aditionalData: result?.aditionalData || {},
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<AuthLogin>(
                    "Login con el core fallido",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<AuthLogin>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}
import { CheckClientActiveCommand } from "../dto/commands/CheckClientActive.command";
import { ClientActiveStatus } from "../dto/results/ClientActiveStatus.result";
import { ClientStatusProviderPort } from "../ports/outbound/ClientStatusProviderPort";
import { CheckClientActiveCommandSchema } from "../validation/check-client-active.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class CheckClientActiveUseCase {
    constructor(private readonly provider: ClientStatusProviderPort) { }

    async execute(
        cmd: CheckClientActiveCommand,
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<ClientActiveStatus>> {
        try {
            const parsed = CheckClientActiveCommandSchema.parse(cmd);
            const result = await this.provider.existsActive(parsed, http);
            return successResponse<ClientActiveStatus>(result.items, {
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
                aditionalData: result?.aditionalData || {},
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<ClientActiveStatus>(
                    "Parámetros del usuario temporalmente no disponibles",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<ClientActiveStatus>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}
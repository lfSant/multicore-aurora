import { MaritalStatus } from "../dto/results/MaritalStatus.result";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";
import { MaritalStatusProviderPort } from "../ports/outbound/MaritalStatusProviderPort";

export class MaritalStatusUseCase {
    constructor(private readonly provider: MaritalStatusProviderPort) { }
    async execute(
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<MaritalStatus[]>> {
        try {
            const result = await this.provider.getMaritalStatus(http);
            return successResponse<MaritalStatus[]>(result.items, {
                client: "Listado de estados civiles obtenido correctamente.",
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
                aditionalData: result?.aditionalData || {},
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<MaritalStatus[]>(
                    e.clientMessage || "Obtención de estados civiles fallido",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<MaritalStatus[]>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}
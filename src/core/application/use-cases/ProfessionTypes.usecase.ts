import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";
import { ProfessionTypesProviderPort } from "../ports/outbound/ProfessionTypesProviderPort";
import { ProfessionTypes } from "../dto/results/ProfessionTypes.result";

export class ProfessionTypesUseCase {
    constructor(private readonly provider: ProfessionTypesProviderPort) { }
    async execute(
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<ProfessionTypes[]>> {
        try {
            const result = await this.provider.getProfessionTypes(http);
            return successResponse<ProfessionTypes[]>(result.items, {
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
                aditionalData: result?.aditionalData || {},
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<ProfessionTypes[]>(
                    "Obtención de tipos de profesión fallido",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<ProfessionTypes[]>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}
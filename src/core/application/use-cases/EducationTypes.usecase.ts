import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";
import { EducationTypesProviderPort } from "../ports/outbound/EducationTypesProviderPort";
import { EducationTypes } from "../dto/results/EducationTypes.result";

export class EducationTypesUseCase {
    constructor(private readonly provider: EducationTypesProviderPort) { }
    async execute(
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<EducationTypes[]>> {
        try {
            const result = await this.provider.getEducationTypes(http);
            return successResponse<EducationTypes[]>(result.items, {
                client: "Listado de tipos de educación obtenido correctamente.",
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
                aditionalData: result?.aditionalData || {},
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<EducationTypes[]>(
                    e.clientMessage || "Obtención de tipos de educación fallido",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<EducationTypes[]>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}
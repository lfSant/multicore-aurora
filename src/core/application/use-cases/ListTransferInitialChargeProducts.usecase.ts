import { TransferInitialChargeProviderPort } from "../ports/outbound/TransferInitialChargeProviderPort";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";
import { groupTransferInitialCharge } from "../utils/group-transfer-initial-charge";
import { TransferInitialChargeBuckets } from "../dto/results/TransferInitialCharge.result";

export class ListTransferInitialChargeProductsUseCase {
    constructor(private readonly provider: TransferInitialChargeProviderPort) { }
    async execute(
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<TransferInitialChargeBuckets>> {
        try {
            const result = await this.provider.getTransferInitialCharge(http);
            const grouped = groupTransferInitialCharge(result.items || []);
            return successResponse<TransferInitialChargeBuckets>([grouped], {
                client: "Listado de productos de carga inicial para transferencia obtenido correctamente.",
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
                aditionalData: result?.aditionalData || {},
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<TransferInitialChargeBuckets>(
                    e.clientMessage || "No se pudo obtener el listado de productos de carga inicial para transferencia",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<TransferInitialChargeBuckets>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}
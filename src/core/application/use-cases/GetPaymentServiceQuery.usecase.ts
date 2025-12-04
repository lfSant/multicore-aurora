import { GetPaymentServiceQueryCommand } from "../dto/commands/GetPaymentServiceQuery.command";
import { PaymentServiceQueryResult } from "../dto/results/PaymentServiceQuery.result";
import { PaymentServiceQueryProviderPort } from "../ports/outbound/PaymentServiceQueryProviderPort";
import { GetPaymentServiceQueryCommandSchema } from "../validation/get-payment-service-query.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class GetPaymentServiceQueryUseCase {
    constructor(private readonly provider: PaymentServiceQueryProviderPort) { }
    async execute(
        cmd: GetPaymentServiceQueryCommand,
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<PaymentServiceQueryResult>> {
        try {
            const parsed = GetPaymentServiceQueryCommandSchema.parse(cmd);
            const result = await this.provider.getPaymentServiceQuery(parsed, http);
            return successResponse<PaymentServiceQueryResult>(result.items, {
                client: `Consulta de pago de servicio exitosa`,
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
                aditionalData: result?.aditionalData || {},
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<PaymentServiceQueryResult>(
                    e.clientMessage || "Consulta de pago de servicio fallida",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<PaymentServiceQueryResult>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}

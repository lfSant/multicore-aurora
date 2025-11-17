import { GetPaymentReversalsCommand } from "../dto/commands/GetPaymentReversals.command";
import { PaymentReversalsResult } from "../dto/results/PaymentReversals.result";
import { PaymentReversalsProviderPort } from "../ports/outbound/PaymentReversalsProviderPort";
import { GetPaymentReversalsCommandSchema } from "../validation/get-payment-reversals.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class GetPaymentReversalsUseCase {
    constructor(private readonly provider: PaymentReversalsProviderPort) { }
    async execute(
        cmd: GetPaymentReversalsCommand,
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<PaymentReversalsResult>> {
        try {
            const parsed = GetPaymentReversalsCommandSchema.parse(cmd);
            const result = await this.provider.getPaymentReversals(parsed, http);
            return successResponse<PaymentReversalsResult>(result.items, {
                client: `Consulta de reversos de pagos exitosa`,
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
                aditionalData: result?.aditionalData || {},
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<PaymentReversalsResult>(
                    e.clientMessage || "Error al consultar reversos de pagos",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<PaymentReversalsResult>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}

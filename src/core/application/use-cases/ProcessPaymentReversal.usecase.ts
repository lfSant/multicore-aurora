import { ProcessPaymentReversalCommand } from "../dto/commands/ProcessPaymentReversal.command";
import { ProcessPaymentReversalResult } from "../dto/results/ProcessPaymentReversal.result";
import { ProcessPaymentReversalProviderPort } from "../ports/outbound/ProcessPaymentReversalProviderPort";
import { ProcessPaymentReversalCommandSchema } from "../validation/process-payment-reversal.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class ProcessPaymentReversalUseCase {
    constructor(private readonly provider: ProcessPaymentReversalProviderPort) { }
    async execute(
        cmd: ProcessPaymentReversalCommand,
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<ProcessPaymentReversalResult>> {
        try {
            const parsed = ProcessPaymentReversalCommandSchema.parse(cmd);
            const result = await this.provider.processPaymentReversal(parsed, http);
            return successResponse<ProcessPaymentReversalResult>(result.items, {
                client: `Reverso de pago procesado exitosamente`,
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
                aditionalData: result?.aditionalData || {},
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<ProcessPaymentReversalResult>(
                    e.clientMessage || "Error al procesar el reverso de pago",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<ProcessPaymentReversalResult>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}

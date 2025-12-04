import { ProcessPaymentServiceCommand } from "../dto/commands/ProcessPaymentService.command";
import { ProcessPaymentServiceResult } from "../dto/results/ProcessPaymentService.result";
import { ProcessPaymentServiceProviderPort } from "../ports/outbound/ProcessPaymentServiceProviderPort";
import { ProcessPaymentServiceCommandSchema } from "../validation/process-payment-service.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class ProcessPaymentServiceUseCase {
    constructor(private readonly provider: ProcessPaymentServiceProviderPort) { }
    async execute(
        cmd: ProcessPaymentServiceCommand,
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<ProcessPaymentServiceResult>> {
        try {
            const parsed = ProcessPaymentServiceCommandSchema.parse(cmd);
            const result = await this.provider.processPaymentService(parsed, http);
            return successResponse<ProcessPaymentServiceResult>(result.items, {
                client: `Pago de servicio procesado exitosamente`,
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
                aditionalData: result?.aditionalData || {},
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<ProcessPaymentServiceResult>(
                    e.clientMessage || "Error al procesar el pago de servicio",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<ProcessPaymentServiceResult>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}

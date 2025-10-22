import { InternalTransferCommand } from "../dto/commands/InternalTransfer.command";
import { InternalTransferResult } from "../dto/results/InternalTransfer.result";
import { InternalTransferProviderPort } from "../ports/outbound/InternalTransferProviderPort";
import { InternalTransferCommandSchema } from "../validation/internal-transfer.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class CreateInternalTransferUseCase {
    constructor(private readonly provider: InternalTransferProviderPort) { }
    async execute(
        cmd: InternalTransferCommand,
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<InternalTransferResult>> {
        try {
            const parsed = InternalTransferCommandSchema.parse(cmd);
            const result = await this.provider.createInternalTransfer(parsed, http);
            return successResponse<InternalTransferResult>(result.items, {
                client: `Transferencia interna exitosa`,
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
                aditionalData: result?.aditionalData || {},
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<InternalTransferResult>(
                    e.clientMessage || "Transferencia interna fallida",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<InternalTransferResult>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}
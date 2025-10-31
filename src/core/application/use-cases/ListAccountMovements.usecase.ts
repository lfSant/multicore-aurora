import { GetAccountMovementsCommand } from "../dto/commands/GetAccountMovements.command";
import { AccountMovement } from "../dto/results/AccountMovement.result";
import { AccountMovementsProviderPort } from "../ports/outbound/AccountMovementsProviderPort";
import { GetAccountMovementsCommandSchema } from "../validation/get-account-movements.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class ListAccountMovementsUseCase {
    constructor(private readonly provider: AccountMovementsProviderPort) { }
    async execute(
        cmd: GetAccountMovementsCommand,
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<AccountMovement[]>> {
        try {
            const parsed = GetAccountMovementsCommandSchema.parse(cmd);
            const result = await this.provider.getAccountMovements(parsed, http);
            return successResponse<AccountMovement[]>(result.items, {
                client: `Consulta de movimientos para la cuenta ${cmd.accountNumber} realizada correctamente.`,
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
                aditionalData: result?.aditionalData || {},
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<AccountMovement[]>(
                    e.clientMessage || "Servicio de listado de movimientos no disponible",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<AccountMovement[]>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}
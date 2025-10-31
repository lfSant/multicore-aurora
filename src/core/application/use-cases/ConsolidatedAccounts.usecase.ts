import { GetConsolidatedAccountsCommand } from "../dto/commands/GetConsolidatedAccounts.command";
import { Account } from "../dto/results/Account.result";
import { ConsolidatedAccountsProviderPort } from "../ports/outbound/ConsolidatedAccountsProviderPort";
import { GetConsolidatedAccountsCommandSchema } from "../validation/get-consolidated-accounts.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class ConsolidatedAccountsUseCase {
    constructor(private readonly provider: ConsolidatedAccountsProviderPort) { }
    async execute(
        cmd: GetConsolidatedAccountsCommand,
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<Account[]>> {
        try {
            const parsed = GetConsolidatedAccountsCommandSchema.parse(cmd);
            const result = await this.provider.getConsolidatedAccounts(parsed, http);
            return successResponse<Account[]>(result.items, {
                client: `Consulta de cuentas para el cliente ${cmd.clientNumber} realizada correctamente.`,
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
                aditionalData: result?.aditionalData || {},
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<Account[]>(
                    e.clientMessage || "Servicio de listado de cuentas no disponible",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<Account[]>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}
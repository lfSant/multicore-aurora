import { ListAccountsCommand } from "../dto/commands/ListAccountsCommand.command";
import { Account } from "../dto/results/Account.result";
import { ClientAccountsProviderPort } from "../ports/outbound/ClientAccountsProviderPort";
import { ListAccountsCommandSchema } from "../validation/list-accounts.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class ListAccountsUseCase {
    constructor(private readonly provider: ClientAccountsProviderPort) { }
    async execute(
        cmd: ListAccountsCommand,
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<Account[]>> {
        const parsed = ListAccountsCommandSchema.parse(cmd);
        try {
            const result = await this.provider.clientAccounts(parsed, http);
            return successResponse<Account[]>(result.items, {
                client: `Consulta de cuentas para el cliente ${cmd.clientIdentification} realizada correctamente.`,
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<Account[]>(
                    "Servicio de listado de cuentas no disponible",
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
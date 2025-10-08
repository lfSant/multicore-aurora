import { GetAccountByNumberCommand } from "../dto/commands/GetAccountByNumber.command";
import { Account } from "../dto/results/Account.result";
import { ClientAccountByNumberProviderPort } from "../ports/outbound/ClientAccountByNumberProviderPort";
import { GetAccountByNumberCommandSchema } from "../validation/get-account-by-number.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class GetAccountByNumberUseCase {
    constructor(private readonly provider: ClientAccountByNumberProviderPort) { }
    async execute(
        cmd: GetAccountByNumberCommand,
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<Account>> {
        const parsed = GetAccountByNumberCommandSchema.parse(cmd);
        try {
            const result = await this.provider.getAccountByNumber(parsed, http);
            return successResponse<Account>(result.items, {
                client: `Consulta de cuenta por número exitosa`,
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<Account>(
                    "Consulta de cuenta por número fallida",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<Account>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}
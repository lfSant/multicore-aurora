import { GetAccountsForCausalsCommand } from "../dto/commands/GetAccountsForCausals.command";
import { AccountForCausalResult } from "../dto/results/AccountForCausal.result";
import { GetAccountsForCausalsProviderPort } from "../ports/outbound/GetAccountsForCausalsProviderPort";
import { GetAccountsForCausalsCommandSchema } from "../validation/get-accounts-for-causals.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class GetAccountsForCausalsUseCase {
  constructor(private readonly provider: GetAccountsForCausalsProviderPort) {}

  async execute(
    cmd: GetAccountsForCausalsCommand,
    http: ProviderCallConfig
  ): Promise<CanonicalResponse<AccountForCausalResult>> {
    try {
      const parsed = GetAccountsForCausalsCommandSchema.parse(cmd);
      const result = await this.provider.getAccountsForCausals(parsed, http);

      return successResponse<AccountForCausalResult>(result.items, {
        client: "Cuentas para causales consultadas exitosamente",
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: result.status || 200,
        raw: result.raw ? [result.raw] : undefined,
        aditionalData: result.aditionalData || {},
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<AccountForCausalResult>(
          e.clientMessage || "Error al consultar cuentas para causales",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<AccountForCausalResult>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

import { GetClientLoansCommand } from "../dto/commands/GetClientLoans.command";
import { ClientLoan } from "../dto/results/ClientLoan.result";
import { ClientLoansProviderPort } from "../ports/outbound/ClientLoansProviderPort";
import { GetClientLoansCommandSchema } from "../validation/get-client-loans.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class GetClientLoansUseCase {
  constructor(private readonly provider: ClientLoansProviderPort) { }

  async execute(
    cmd: GetClientLoansCommand,
    http: ProviderCallConfig,
  ): Promise<CanonicalResponse<ClientLoan[]>> {
    try {
      const parsed = GetClientLoansCommandSchema.parse(cmd);
      const result = await this.provider.getClientLoans(parsed, http);
      return successResponse<ClientLoan[]>(result.items, {
        client: `Consulta de préstamos para el cliente ${cmd.clientNumber} realizada correctamente.`,
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: 200,
        raw: result.raw ? [result.raw] : undefined,
        aditionalData: result?.aditionalData || {},
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<ClientLoan[]>(
          e.clientMessage || "Información de préstamos temporalmente no disponible",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<ClientLoan[]>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

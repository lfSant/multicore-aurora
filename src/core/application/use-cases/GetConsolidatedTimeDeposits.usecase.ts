import { GetConsolidatedTimeDepositsCommand } from "../dto/commands/GetConsolidatedTimeDeposits.command";
import { TimeDeposit } from "../dto/results/TimeDeposit.result";
import { ConsolidatedTimeDepositsProviderPort } from "../ports/outbound/ConsolidatedTimeDepositsProviderPort";
import { GetConsolidatedTimeDepositsSchema } from "../validation/get-consolidated-time-deposits.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class GetConsolidatedTimeDepositsUseCase {
  constructor(private readonly provider: ConsolidatedTimeDepositsProviderPort) { }

  async execute(
    cmd: GetConsolidatedTimeDepositsCommand,
    http: ProviderCallConfig,
  ): Promise<CanonicalResponse<TimeDeposit[]>> {
    try {
      const parsed = GetConsolidatedTimeDepositsSchema.parse(cmd);
      const result = await this.provider.getConsolidatedTimeDeposits(parsed, http);
      return successResponse<TimeDeposit[]>(result.items, {
        client: `Depósitos a plazo del cliente ${cmd.clientNumber} obtenidos correctamente.`,
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: 200,
        raw: result.raw ? [result.raw] : undefined,
        aditionalData: result?.aditionalData || {},
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<TimeDeposit[]>(
          e.clientMessage || "Depósitos a plazo temporalmente no disponibles",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<TimeDeposit[]>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

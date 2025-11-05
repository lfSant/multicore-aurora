import { GetDepositMovementsCommand } from "../dto/commands/GetDepositMovements.command";
import { DepositMovement } from "../dto/results/DepositMovement.result";
import { DepositMovementsProviderPort } from "../ports/outbound/DepositMovementsProviderPort";
import { GetDepositMovementsSchema } from "../validation/get-deposit-movements.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class GetDepositMovementsUseCase {
  constructor(private readonly provider: DepositMovementsProviderPort) { }

  async execute(
    cmd: GetDepositMovementsCommand,
    http: ProviderCallConfig,
  ): Promise<CanonicalResponse<DepositMovement[]>> {
    try {
      const parsed = GetDepositMovementsSchema.parse(cmd);
      const result = await this.provider.getDepositMovements(parsed, http);
      return successResponse<DepositMovement[]>(result.items, {
        client: `Movimientos del depósito obtenidos correctamente.`,
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: 200,
        raw: result.raw ? [result.raw] : undefined,
        aditionalData: result?.aditionalData || {},
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<DepositMovement[]>(
          e.clientMessage || "Movimientos del depósito temporalmente no disponibles",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<DepositMovement[]>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

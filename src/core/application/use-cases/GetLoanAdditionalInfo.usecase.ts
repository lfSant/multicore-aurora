import { GetLoanAdditionalInfoCommand } from "../dto/commands/GetLoanAdditionalInfo.command";
import { LoanAdditionalInfo } from "../dto/results/LoanAdditionalInfo.result";
import { LoanAdditionalInfoProviderPort } from "../ports/outbound/LoanAdditionalInfoProviderPort";
import { GetLoanAdditionalInfoSchema } from "../validation/get-loan-additional-info.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class GetLoanAdditionalInfoUseCase {
  constructor(private readonly provider: LoanAdditionalInfoProviderPort) { }

  async execute(
    cmd: GetLoanAdditionalInfoCommand,
    http: ProviderCallConfig,
  ): Promise<CanonicalResponse<LoanAdditionalInfo>> {
    try {
      const parsed = GetLoanAdditionalInfoSchema.parse(cmd);
      const result = await this.provider.getLoanAdditionalInfo(parsed, http);
      return successResponse<LoanAdditionalInfo>(result.items, {
        client: `Información adicional del préstamo ${cmd.loanSequential} obtenida correctamente.`,
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: 200,
        raw: result.raw ? [result.raw] : undefined,
        aditionalData: result?.aditionalData || {},
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<LoanAdditionalInfo>(
          e.clientMessage || "Información adicional del préstamo temporalmente no disponible",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<LoanAdditionalInfo>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

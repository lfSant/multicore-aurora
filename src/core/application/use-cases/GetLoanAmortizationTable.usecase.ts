import { GetLoanAmortizationTableCommand } from "../dto/commands/GetLoanAmortizationTable.command";
import { LoanAmortizationTable } from "../dto/results/LoanAmortizationTable.result";
import { LoanAmortizationTableProviderPort } from "../ports/outbound/LoanAmortizationTableProviderPort";
import { GetLoanAmortizationTableSchema } from "../validation/get-loan-amortization-table.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class GetLoanAmortizationTableUseCase {
  constructor(private readonly provider: LoanAmortizationTableProviderPort) { }

  async execute(
    cmd: GetLoanAmortizationTableCommand,
    http: ProviderCallConfig,
  ): Promise<CanonicalResponse<LoanAmortizationTable>> {
    try {
      const parsed = GetLoanAmortizationTableSchema.parse(cmd);
      const result = await this.provider.getLoanAmortizationTable(parsed, http);
      return successResponse<LoanAmortizationTable>(result.items, {
        client: `Tabla de amortización del préstamo ${cmd.loanSequential} obtenida correctamente.`,
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: 200,
        raw: result.raw ? [result.raw] : undefined,
        aditionalData: result?.aditionalData || {},
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<LoanAmortizationTable>(
          e.clientMessage || "Tabla de amortización del préstamo temporalmente no disponible",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<LoanAmortizationTable>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

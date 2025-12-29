import { GetUserBeneficiariesCommand } from "../dto/commands/GetUserBeneficiaries.command";
import { UserBeneficiaryResult } from "../dto/results/UserBeneficiary.result";
import { GetUserBeneficiariesProviderPort } from "../ports/outbound/GetUserBeneficiariesProviderPort";
import { GetUserBeneficiariesCommandSchema } from "../validation/get-user-beneficiaries.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class GetUserBeneficiariesUseCase {
  constructor(private readonly provider: GetUserBeneficiariesProviderPort) {}

  async execute(
    cmd: GetUserBeneficiariesCommand,
    http: ProviderCallConfig,
  ): Promise<CanonicalResponse<UserBeneficiaryResult>> {
    try {
      const parsed = GetUserBeneficiariesCommandSchema.parse(cmd);
      const result = await this.provider.getUserBeneficiaries(parsed, http);

      return successResponse<UserBeneficiaryResult>(result.items, {
        client: "Beneficiarios obtenidos exitosamente",
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: result.status || 200,
        raw: result.raw ? [result.raw] : undefined,
        aditionalData: result.aditionalData || {},
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<UserBeneficiaryResult>(
          e.clientMessage || "No se pudieron obtener los beneficiarios",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<UserBeneficiaryResult>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

import { GetAccountSignersCommand } from "../dto/commands/GetAccountSigners.command";
import { AccountSignersInfo } from "../dto/results/AccountSigner.result";
import { AccountSignersProviderPort } from "../ports/outbound/AccountSignersProviderPort";
import { GetAccountSignersCommandSchema } from "../validation/get-account-signers.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class GetAccountSignersUseCase {
  constructor(private readonly provider: AccountSignersProviderPort) { }

  async execute(
    cmd: GetAccountSignersCommand,
    http: ProviderCallConfig,
  ): Promise<CanonicalResponse<AccountSignersInfo>> {
    try {
      const parsed = GetAccountSignersCommandSchema.parse(cmd);
      const result = await this.provider.getAccountSigners(parsed, http);
      return successResponse<AccountSignersInfo>(result.items, {
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: 200,
        raw: result.raw ? [result.raw] : undefined,
        aditionalData: result?.aditionalData || {},
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<AccountSignersInfo>(
          e.clientMessage || "Firmantes de cuenta temporalmente no disponibles",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<AccountSignersInfo>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

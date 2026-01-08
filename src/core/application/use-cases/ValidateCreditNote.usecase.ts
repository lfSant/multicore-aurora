import { ValidateCreditNoteCommand } from "../dto/commands/ValidateCreditNote.command";
import { ValidateCreditNoteResult } from "../dto/results/ValidateCreditNote.result";
import { ValidateCreditNoteProviderPort } from "../ports/outbound/ValidateCreditNoteProviderPort";
import { ValidateCreditNoteCommandSchema } from "../validation/validate-credit-note.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class ValidateCreditNoteUseCase {
  constructor(private readonly provider: ValidateCreditNoteProviderPort) {}

  async execute(
    cmd: ValidateCreditNoteCommand,
    http: ProviderCallConfig
  ): Promise<CanonicalResponse<ValidateCreditNoteResult>> {
    try {
      const parsed = ValidateCreditNoteCommandSchema.parse(cmd);
      const result = await this.provider.validateCreditNote(parsed, http);

      return successResponse<ValidateCreditNoteResult>(result.items, {
        client: "Nota de crédito validada exitosamente",
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: result.status || 200,
        raw: result.raw ? [result.raw] : undefined,
        aditionalData: result.aditionalData || {},
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<ValidateCreditNoteResult>(
          e.clientMessage || "Error al validar nota de crédito",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<ValidateCreditNoteResult>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

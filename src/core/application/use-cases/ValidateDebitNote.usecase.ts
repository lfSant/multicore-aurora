import { ValidateDebitNoteCommand } from "../dto/commands/ValidateDebitNote.command";
import { ValidateDebitNoteResult } from "../dto/results/ValidateDebitNote.result";
import { ValidateDebitNoteProviderPort } from "../ports/outbound/ValidateDebitNoteProviderPort";
import { ValidateDebitNoteCommandSchema } from "../validation/validate-debit-note.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";

export class ValidateDebitNoteUseCase {
  constructor(private readonly provider: ValidateDebitNoteProviderPort) {}

  async execute(
    cmd: ValidateDebitNoteCommand,
    http: ProviderCallConfig
  ): Promise<CanonicalResponse<ValidateDebitNoteResult>> {
    try {
      const parsed = ValidateDebitNoteCommandSchema.parse(cmd);
      const result = await this.provider.validateDebitNote(parsed, http);

      return successResponse<ValidateDebitNoteResult>(result.items, {
        client: "Nota de débito validada exitosamente",
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: result.status || 200,
        raw: result.raw ? [result.raw] : undefined,
        aditionalData: result.aditionalData || {},
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<ValidateDebitNoteResult>(
          e.clientMessage || "Error al validar nota de débito",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<ValidateDebitNoteResult>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

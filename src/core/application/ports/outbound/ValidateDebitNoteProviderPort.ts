import { ProviderResult } from "../../../shared/types";
import { ProviderCallConfig } from "../../../shared/http";
import { ValidateDebitNoteResult } from "../../dto/results/ValidateDebitNote.result";
import { ValidateDebitNoteCommand } from "../../dto/commands/ValidateDebitNote.command";

export interface ValidateDebitNoteProviderPort {
  validateDebitNote(
    cmd: ValidateDebitNoteCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ValidateDebitNoteResult>>;
}

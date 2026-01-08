import { ProviderResult } from "../../../shared/types";
import { ProviderCallConfig } from "../../../shared/http";
import { ValidateCreditNoteResult } from "../../dto/results/ValidateCreditNote.result";
import { ValidateCreditNoteCommand } from "../../dto/commands/ValidateCreditNote.command";

export interface ValidateCreditNoteProviderPort {
  validateCreditNote(
    cmd: ValidateCreditNoteCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ValidateCreditNoteResult>>;
}

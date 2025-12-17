import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { ValidateCreditNoteCommand } from "../../core/application/dto/commands/ValidateCreditNote.command";
import { ValidateCreditNoteResult } from "../../core/application/dto/results/ValidateCreditNote.result";
import { ValidateCreditNoteProviderPort } from "../../core/application/ports/outbound/ValidateCreditNoteProviderPort";

export class ValidateCreditNoteDynamicAdapter
  implements ValidateCreditNoteProviderPort
{
  constructor(private readonly base: BaseDynamicAdapter<ValidateCreditNoteResult>) {}

  validateCreditNote(
    cmd: ValidateCreditNoteCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ValidateCreditNoteResult>> {
    return this.base.run(cmd, http, options);
  }
}

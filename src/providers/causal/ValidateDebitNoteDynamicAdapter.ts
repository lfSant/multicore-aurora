import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { ValidateDebitNoteCommand } from "../../core/application/dto/commands/ValidateDebitNote.command";
import { ValidateDebitNoteResult } from "../../core/application/dto/results/ValidateDebitNote.result";
import { ValidateDebitNoteProviderPort } from "../../core/application/ports/outbound/ValidateDebitNoteProviderPort";

export class ValidateDebitNoteDynamicAdapter
  implements ValidateDebitNoteProviderPort
{
  constructor(private readonly base: BaseDynamicAdapter<ValidateDebitNoteResult>) {}

  validateDebitNote(
    cmd: ValidateDebitNoteCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ValidateDebitNoteResult>> {
    return this.base.run(cmd, http, options);
  }
}

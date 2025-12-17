import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { ValidateCreditNoteUseCase } from "../../core/application/use-cases/ValidateCreditNote.usecase";
import { ValidateCreditNoteCommand } from "../../core/application/dto/commands/ValidateCreditNote.command";
import { ValidateCreditNoteResult } from "../../core/application/dto/results/ValidateCreditNote.result";
import { ValidateCreditNoteDynamicAdapter } from "../../providers/causal/ValidateCreditNoteDynamicAdapter";

export function createValidateCreditNoteUseCase(
  providerKey: string,
  operationKey = "validateCreditNote",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<ValidateCreditNoteResult>(providerKey, operationKey, adapterOptions);
  const port = new ValidateCreditNoteDynamicAdapter(base);
  return new ValidateCreditNoteUseCase(port);
}

export async function validateCreditNote(
  command: ValidateCreditNoteCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<ValidateCreditNoteResult>> {
  const uc = createValidateCreditNoteUseCase(
    opts.provider,
    opts.operation ?? "validateCreditNote",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

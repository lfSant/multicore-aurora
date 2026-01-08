import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { ValidateDebitNoteUseCase } from "../../core/application/use-cases/ValidateDebitNote.usecase";
import { ValidateDebitNoteCommand } from "../../core/application/dto/commands/ValidateDebitNote.command";
import { ValidateDebitNoteResult } from "../../core/application/dto/results/ValidateDebitNote.result";
import { ValidateDebitNoteDynamicAdapter } from "../../providers/causal/ValidateDebitNoteDynamicAdapter";

export function createValidateDebitNoteUseCase(
  providerKey: string,
  operationKey = "validateDebitNote",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<ValidateDebitNoteResult>(providerKey, operationKey, adapterOptions);
  const port = new ValidateDebitNoteDynamicAdapter(base);
  return new ValidateDebitNoteUseCase(port);
}

export async function validateDebitNote(
  command: ValidateDebitNoteCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<ValidateDebitNoteResult>> {
  const uc = createValidateDebitNoteUseCase(
    opts.provider,
    opts.operation ?? "validateDebitNote",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

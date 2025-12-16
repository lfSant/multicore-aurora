import {
  ValidateDebitNoteCommand,
  ValidateDebitNoteResult,
  ValidateDebitNoteUseCase,
} from "../../core";
import { ValidateDebitNoteDynamicAdapter } from "../../providers";
import { ProviderCallConfig, CanonicalResponse } from "../../core";
import { createBaseDynamicAdapter } from "../common/factories";

export function createValidateDebitNoteUseCase(providerKey: string) {
  const baseAdapter = createBaseDynamicAdapter<ValidateDebitNoteResult>(
    providerKey,
    "validateDebitNote"
  );
  const adapter = new ValidateDebitNoteDynamicAdapter(baseAdapter);
  return new ValidateDebitNoteUseCase(adapter);
}

export async function validateDebitNote(
  command: ValidateDebitNoteCommand,
  http: ProviderCallConfig,
  options: { provider: string; tenant?: string; environment?: string }
): Promise<CanonicalResponse<ValidateDebitNoteResult>> {
  const useCase = createValidateDebitNoteUseCase(options.provider);
  return useCase.execute(command, http);
}

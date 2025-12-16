import {
  ValidateCreditNoteCommand,
  ValidateCreditNoteResult,
  ValidateCreditNoteUseCase,
} from "../../core";
import { ValidateCreditNoteDynamicAdapter } from "../../providers";
import { ProviderCallConfig, CanonicalResponse } from "../../core";
import { createBaseDynamicAdapter } from "../common/factories";

export function createValidateCreditNoteUseCase(providerKey: string) {
  const baseAdapter = createBaseDynamicAdapter<ValidateCreditNoteResult>(
    providerKey,
    "validateCreditNote"
  );
  const adapter = new ValidateCreditNoteDynamicAdapter(baseAdapter);
  return new ValidateCreditNoteUseCase(adapter);
}

export async function validateCreditNote(
  command: ValidateCreditNoteCommand,
  http: ProviderCallConfig,
  options: { provider: string; tenant?: string; environment?: string }
): Promise<CanonicalResponse<ValidateCreditNoteResult>> {
  const useCase = createValidateCreditNoteUseCase(options.provider);
  return useCase.execute(command, http);
}

import { C as CanonicalResponse } from '../../types-D11BfpWV.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { c as ValidateDebitNoteUseCase, V as ValidateDebitNoteCommand, a as ValidateDebitNoteResult, g as ValidateCreditNoteUseCase, d as ValidateCreditNoteCommand, e as ValidateCreditNoteResult } from '../../ValidateCreditNote.usecase-eOK5DQAi.cjs';

declare function createValidateDebitNoteUseCase(providerKey: string): ValidateDebitNoteUseCase;
declare function validateDebitNote(command: ValidateDebitNoteCommand, http: ProviderCallConfig, options: {
    provider: string;
    tenant?: string;
    environment?: string;
}): Promise<CanonicalResponse<ValidateDebitNoteResult>>;

declare function createValidateCreditNoteUseCase(providerKey: string): ValidateCreditNoteUseCase;
declare function validateCreditNote(command: ValidateCreditNoteCommand, http: ProviderCallConfig, options: {
    provider: string;
    tenant?: string;
    environment?: string;
}): Promise<CanonicalResponse<ValidateCreditNoteResult>>;

export { createValidateCreditNoteUseCase, createValidateDebitNoteUseCase, validateCreditNote, validateDebitNote };

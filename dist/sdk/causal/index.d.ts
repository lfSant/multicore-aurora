import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-D11BfpWV.js';
import { g as ValidateDebitNoteUseCase, d as ValidateDebitNoteCommand, f as ValidateDebitNoteResult, c as ValidateCreditNoteUseCase, V as ValidateCreditNoteCommand, b as ValidateCreditNoteResult } from '../../ValidateCreditNote.usecase-DCdAdgUA.js';

declare function createValidateDebitNoteUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ValidateDebitNoteUseCase;
declare function validateDebitNote(command: ValidateDebitNoteCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ValidateDebitNoteResult>>;

declare function createValidateCreditNoteUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ValidateCreditNoteUseCase;
declare function validateCreditNote(command: ValidateCreditNoteCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ValidateCreditNoteResult>>;

export { createValidateCreditNoteUseCase, createValidateDebitNoteUseCase, validateCreditNote, validateDebitNote };

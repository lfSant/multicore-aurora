import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-D11BfpWV.js';
import { c as StartCausalFlowUseCase, S as StartCausalFlowCommand, b as StartCausalFlowResult, j as ValidateDebitNoteUseCase, g as ValidateDebitNoteCommand, i as ValidateDebitNoteResult, f as ValidateCreditNoteUseCase, V as ValidateCreditNoteCommand, e as ValidateCreditNoteResult } from '../../ValidateCreditNote.usecase-EHPevEv1.js';

declare function createStartCausalFlowUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): StartCausalFlowUseCase;
declare function startCausalFlow(command: StartCausalFlowCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<StartCausalFlowResult>>;

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

export { createStartCausalFlowUseCase, createValidateCreditNoteUseCase, createValidateDebitNoteUseCase, startCausalFlow, validateCreditNote, validateDebitNote };

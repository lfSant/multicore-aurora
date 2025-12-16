import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.js';
import { P as ProviderCallConfig } from './http-CRaj6wih.js';

interface ValidateDebitNoteCommand {
    identification: string;
    accountNumber: string;
    amount: string;
    causal: string;
    observation: string;
    flowSsn: string;
}

interface ValidateDebitNoteResult {
    transactionReference: string;
    commissionReference: string;
}

interface ValidateDebitNoteProviderPort {
    validateDebitNote(cmd: ValidateDebitNoteCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ValidateDebitNoteResult>>;
}

declare class ValidateDebitNoteUseCase {
    private readonly provider;
    constructor(provider: ValidateDebitNoteProviderPort);
    execute(cmd: ValidateDebitNoteCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ValidateDebitNoteResult>>;
}

interface ValidateCreditNoteCommand {
    identification: string;
    accountNumber: string;
    amount: string;
    causal: string;
    observation: string;
    flowSsn: string;
}

interface ValidateCreditNoteResult {
    transactionReference: string;
    commissionReference: string;
}

interface ValidateCreditNoteProviderPort {
    validateCreditNote(cmd: ValidateCreditNoteCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ValidateCreditNoteResult>>;
}

declare class ValidateCreditNoteUseCase {
    private readonly provider;
    constructor(provider: ValidateCreditNoteProviderPort);
    execute(cmd: ValidateCreditNoteCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ValidateCreditNoteResult>>;
}

export { type ValidateDebitNoteCommand as V, type ValidateDebitNoteResult as a, type ValidateDebitNoteProviderPort as b, ValidateDebitNoteUseCase as c, type ValidateCreditNoteCommand as d, type ValidateCreditNoteResult as e, type ValidateCreditNoteProviderPort as f, ValidateCreditNoteUseCase as g };

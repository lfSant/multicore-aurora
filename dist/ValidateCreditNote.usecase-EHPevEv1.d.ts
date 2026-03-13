import { P as ProviderCallConfig } from './http-CRaj6wih.js';
import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.js';

interface StartCausalFlowCommand {
    providerAcronym: string;
    channel: string;
    deviceIp: string;
    date: string;
    country: string;
    latitude: number;
    longitude: number;
    username?: string;
    clientNumber?: number;
    observation?: string;
    transactionIdentifier: string;
}

interface StartCausalFlowResult {
    success: boolean;
    message: string;
}

interface StartCausalFlowProviderPort {
    startCausalFlow(cmd: StartCausalFlowCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<StartCausalFlowResult>>;
}

declare class StartCausalFlowUseCase {
    private readonly provider;
    constructor(provider: StartCausalFlowProviderPort);
    execute(command: StartCausalFlowCommand, http: ProviderCallConfig): Promise<CanonicalResponse<StartCausalFlowResult>>;
}

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

export { type StartCausalFlowCommand as S, type ValidateCreditNoteCommand as V, type StartCausalFlowProviderPort as a, type StartCausalFlowResult as b, StartCausalFlowUseCase as c, type ValidateCreditNoteProviderPort as d, type ValidateCreditNoteResult as e, ValidateCreditNoteUseCase as f, type ValidateDebitNoteCommand as g, type ValidateDebitNoteProviderPort as h, type ValidateDebitNoteResult as i, ValidateDebitNoteUseCase as j };

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

interface GetAccountsForCausalsCommand {
    identification: string;
    documentType?: string;
    transactionIdentifier: string;
}

interface AccountForCausalResult {
    accountHolder: string;
    currency: string;
    status: string;
    product: string;
    accountNumber: string;
}

interface GetAccountsForCausalsProviderPort {
    getAccountsForCausals(cmd: GetAccountsForCausalsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<AccountForCausalResult>>;
}

declare class GetAccountsForCausalsUseCase {
    private readonly provider;
    constructor(provider: GetAccountsForCausalsProviderPort);
    execute(cmd: GetAccountsForCausalsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<AccountForCausalResult>>;
}

interface CreateDebitNoteCommand {
    identification: string;
    accountNumber: string;
    amount: string;
    causal: string;
    observation: string;
    transactionIdentifier: string;
    channel: string;
    clientPaymentId?: string;
    sourceAccountSequential?: number;
    destinationAccount?: string;
    beneficiaryIdentification?: string;
    beneficiaryName?: string;
    payerName?: string;
}

interface CreateDebitNoteResult {
    transactionReference: string;
    commissionReference: string;
    postingDateTime?: string;
    debitedAmount?: number;
}

interface CreateDebitNoteProviderPort {
    createDebitNote(cmd: CreateDebitNoteCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<CreateDebitNoteResult>>;
}

declare class CreateDebitNoteUseCase {
    private readonly provider;
    constructor(provider: CreateDebitNoteProviderPort);
    execute(cmd: CreateDebitNoteCommand, http: ProviderCallConfig): Promise<CanonicalResponse<CreateDebitNoteResult>>;
}

interface CreateCreditNoteCommand {
    channel: string;
    causal: string;
    transactionIdentifier: string;
    identification?: string;
    accountNumber?: string;
    amount?: string;
    observation?: string;
    originalTransactionId?: string;
    reversalReason?: string;
}

interface CreateCreditNoteResult {
    transactionReference: string;
    commissionReference: string;
    postingDateTime?: string;
    creditedAmount?: number;
}

interface CreateCreditNoteProviderPort {
    createCreditNote(cmd: CreateCreditNoteCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<CreateCreditNoteResult>>;
}

declare class CreateCreditNoteUseCase {
    private readonly provider;
    constructor(provider: CreateCreditNoteProviderPort);
    execute(cmd: CreateCreditNoteCommand, http: ProviderCallConfig): Promise<CanonicalResponse<CreateCreditNoteResult>>;
}

interface CausalCatalogItem {
    accountingAccount?: string;
    active?: boolean;
    causalCode?: string;
    causalName?: string;
    commissionAmount?: string;
    description?: string;
    documentType?: string;
    hasCommission?: boolean;
    operationType?: string;
}

interface CausalsCatalogProviderPort {
    getCausalsCatalog(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<CausalCatalogItem>>;
}

declare class ListCausalsCatalogUseCase {
    private readonly provider;
    constructor(provider: CausalsCatalogProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<CausalCatalogItem>>;
}

export { type AccountForCausalResult as A, type CausalCatalogItem as C, type GetAccountsForCausalsCommand as G, ListCausalsCatalogUseCase as L, type StartCausalFlowCommand as S, type CausalsCatalogProviderPort as a, type CreateCreditNoteCommand as b, type CreateCreditNoteProviderPort as c, type CreateCreditNoteResult as d, CreateCreditNoteUseCase as e, type CreateDebitNoteCommand as f, type CreateDebitNoteProviderPort as g, type CreateDebitNoteResult as h, CreateDebitNoteUseCase as i, type GetAccountsForCausalsProviderPort as j, GetAccountsForCausalsUseCase as k, type StartCausalFlowProviderPort as l, type StartCausalFlowResult as m, StartCausalFlowUseCase as n };

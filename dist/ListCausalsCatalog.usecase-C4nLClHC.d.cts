import { P as ProviderCallConfig } from './http-CRaj6wih.cjs';
import { P as ProviderResult, C as CanonicalResponse } from './types-DZJuEFLS.cjs';

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
    transaction: {
        channel: string;
        platform?: string;
        clientRequestId: string;
        transactionId: string;
        causal: string;
        amount: string;
        concept: string;
    };
    debtor: {
        account: string;
        identification: string;
        name: string;
        ifi?: string;
        ifiCode?: string;
        accountNumber?: string;
    };
    creditor: {
        account: string;
        identification: string;
        name: string;
        ifi?: string;
        ifiCode?: string;
        accountNumber?: string;
    };
}

interface CreateDebitNoteResult {
    transactionReference: string;
    commissionReference: string;
    transactionId?: string;
    postingDateTime?: string;
    debitedAmount?: number;
    accountingDate?: string;
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
    transaction: {
        channel: string;
        platform?: string;
        clientRequestId: string;
        transactionId: string;
        causal: string;
        amount: string;
        concept: string;
    };
    debtor: {
        account: string;
        identification: string;
        name: string;
        ifi?: string;
        ifiCode?: string;
        accountNumber?: string;
    };
    creditor: {
        account: string;
        identification: string;
        name: string;
        ifi?: string;
        ifiCode?: string;
        accountNumber?: string;
    };
}

interface CreateCreditNoteResult {
    transactionReference: string;
    commissionReference: string;
    transactionId?: string;
    postingDateTime?: string;
    creditedAmount?: number;
    accountingDate?: string;
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

interface ReverseDebitNoteCommand {
    transaction: {
        channel: string;
        platform?: string;
        clientRequestId: string;
        transactionId: string;
        transactionIdReverse: string;
        transactionReferenceReverse: string;
        transactionReference?: string;
        causal: string;
        amount: string;
        concept: string;
    };
    debtor: {
        account: string;
        identification: string;
        name: string;
        ifi?: string;
        ifiCode?: string;
        accountNumber?: string;
    };
    creditor: {
        account: string;
        identification: string;
        name: string;
        ifi?: string;
        ifiCode?: string;
        accountNumber?: string;
    };
}

interface ReverseDebitNoteResult {
    transactionReference: string;
    commissionReference: string;
    transactionId?: string;
    transactionIdReverse?: string;
    transactionReferenceReverse?: string;
    postingDateTime?: string;
    reversedAmount?: string;
    accountingDate?: string;
}

interface ReverseDebitNoteProviderPort {
    reverseDebitNote(cmd: ReverseDebitNoteCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ReverseDebitNoteResult>>;
}

declare class ReverseDebitNoteUseCase {
    private readonly provider;
    constructor(provider: ReverseDebitNoteProviderPort);
    execute(cmd: ReverseDebitNoteCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ReverseDebitNoteResult>>;
}

interface ReverseCreditNoteCommand {
    transaction: {
        channel: string;
        platform?: string;
        clientRequestId: string;
        transactionId: string;
        transactionIdReverse: string;
        transactionReferenceReverse: string;
        transactionReference?: string;
        causal: string;
        amount: string;
        concept: string;
    };
    debtor: {
        account: string;
        identification: string;
        name: string;
        ifi?: string;
        ifiCode?: string;
        accountNumber?: string;
    };
    creditor: {
        account: string;
        identification: string;
        name: string;
        ifi?: string;
        ifiCode?: string;
        accountNumber?: string;
    };
}

interface ReverseCreditNoteResult {
    transactionReference: string;
    commissionReference: string;
    transactionId?: string;
    transactionIdReverse?: string;
    transactionReferenceReverse?: string;
    postingDateTime?: string;
    reversedAmount?: string;
    accountingDate?: string;
}

interface ReverseCreditNoteProviderPort {
    reverseCreditNote(cmd: ReverseCreditNoteCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ReverseCreditNoteResult>>;
}

declare class ReverseCreditNoteUseCase {
    private readonly provider;
    constructor(provider: ReverseCreditNoteProviderPort);
    execute(cmd: ReverseCreditNoteCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ReverseCreditNoteResult>>;
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

export { type AccountForCausalResult as A, type CausalCatalogItem as C, type GetAccountsForCausalsCommand as G, ListCausalsCatalogUseCase as L, type ReverseCreditNoteCommand as R, type StartCausalFlowCommand as S, type CausalsCatalogProviderPort as a, type CreateCreditNoteCommand as b, type CreateCreditNoteProviderPort as c, type CreateCreditNoteResult as d, CreateCreditNoteUseCase as e, type CreateDebitNoteCommand as f, type CreateDebitNoteProviderPort as g, type CreateDebitNoteResult as h, CreateDebitNoteUseCase as i, type GetAccountsForCausalsProviderPort as j, GetAccountsForCausalsUseCase as k, type ReverseCreditNoteProviderPort as l, type ReverseCreditNoteResult as m, ReverseCreditNoteUseCase as n, type ReverseDebitNoteCommand as o, type ReverseDebitNoteProviderPort as p, type ReverseDebitNoteResult as q, ReverseDebitNoteUseCase as r, type StartCausalFlowProviderPort as s, type StartCausalFlowResult as t, StartCausalFlowUseCase as u };

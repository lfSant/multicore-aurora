import { P as ProviderCallConfig } from './http-CRaj6wih.cjs';
import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.cjs';

interface ListAccountsCommand {
    clientIdentification: string;
}

interface Account {
    accountNumber: string;
    accountType: string;
    status: string;
    currency: string;
    officeName?: string;
    openDate?: string;
    signatureType?: string;
    balance: string;
    availableBalance: string;
    holdBalance?: string;
    blockedBalance?: string;
    otherBalance?: string;
    pledgedBalance?: string;
    operationalTransactionsAllowed?: boolean | null;
    productCategory: 'ACCOUNT';
    extras?: Record<string, any>;
}

interface ClientAccountsProviderPort {
    clientAccounts(cmd: ListAccountsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<Account[]>>;
}

declare class ListAccountsUseCase {
    private readonly provider;
    constructor(provider: ClientAccountsProviderPort);
    execute(cmd: ListAccountsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<Account[]>>;
}

interface GetAccountByNumberCommand {
    accountNumber: string;
    productCode?: string;
}

interface ClientAccountByNumberProviderPort {
    getAccountByNumber(cmd: GetAccountByNumberCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<Account>>;
}

declare class GetAccountByNumberUseCase {
    private readonly provider;
    constructor(provider: ClientAccountByNumberProviderPort);
    execute(cmd: GetAccountByNumberCommand, http: ProviderCallConfig): Promise<CanonicalResponse<Account>>;
}

interface GetConsolidatedAccountsCommand {
    clientNumber: number | string;
    clientIdentification?: string;
}

interface ConsolidatedAccountsProviderPort {
    getConsolidatedAccounts(cmd: GetConsolidatedAccountsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<Account[]>>;
}

declare class ConsolidatedAccountsUseCase {
    private readonly provider;
    constructor(provider: ConsolidatedAccountsProviderPort);
    execute(cmd: GetConsolidatedAccountsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<Account[]>>;
}

interface GetAccountMovementsCommand {
    accountNumber?: string;
    productCode?: string;
    startDate: string;
    endDate: string;
}

interface AccountMovement {
    date: string;
    reference: string;
    amount: string;
    balance: string;
    machineDate?: string;
    concept: string;
    cause?: string;
    office?: string;
    user?: string;
    movementType: 'DEBIT' | 'CREDIT';
    extras?: Record<string, any>;
}

interface AccountMovementsProviderPort {
    getAccountMovements(cmd: GetAccountMovementsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<AccountMovement[]>>;
}

declare class ListAccountMovementsUseCase {
    private readonly provider;
    constructor(provider: AccountMovementsProviderPort);
    execute(cmd: GetAccountMovementsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<AccountMovement[]>>;
}

interface GetAccountSignersCommand {
    accountNumber: string;
}

interface AccountSigner {
    clientNumber: string;
    identificationDocument: string;
    firstName: string;
    lastName: string;
    signatureType: string;
    email: string;
    phoneNumber: string;
}
interface AccountSignersInfo {
    accountCode: string;
    accountType: string;
    signatureType: string;
    signers: AccountSigner[];
}

interface AccountSignersProviderPort {
    getAccountSigners(cmd: GetAccountSignersCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<AccountSignersInfo>>;
}

declare class GetAccountSignersUseCase {
    private readonly provider;
    constructor(provider: AccountSignersProviderPort);
    execute(cmd: GetAccountSignersCommand, http: ProviderCallConfig): Promise<CanonicalResponse<AccountSignersInfo>>;
}

interface GetAccountsForCausalsCommand {
    identification: string;
    documentTypeId?: string;
    flowSsn: string;
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

export { type Account as A, type ClientAccountByNumberProviderPort as C, type GetAccountByNumberCommand as G, ListAccountMovementsUseCase as L, type AccountForCausalResult as a, type AccountMovement as b, type AccountMovementsProviderPort as c, type AccountSigner as d, type AccountSignersInfo as e, type AccountSignersProviderPort as f, type ClientAccountsProviderPort as g, type ConsolidatedAccountsProviderPort as h, ConsolidatedAccountsUseCase as i, GetAccountByNumberUseCase as j, type GetAccountMovementsCommand as k, type GetAccountSignersCommand as l, GetAccountSignersUseCase as m, type GetAccountsForCausalsCommand as n, type GetAccountsForCausalsProviderPort as o, GetAccountsForCausalsUseCase as p, type GetConsolidatedAccountsCommand as q, type ListAccountsCommand as r, ListAccountsUseCase as s };

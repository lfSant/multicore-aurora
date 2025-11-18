import { P as ProviderCallConfig, a as ProviderResult, C as CanonicalResponse } from './http-BkU-WJ0-.cjs';

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
    accountNumber: string;
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

export { type Account as A, type ClientAccountsProviderPort as C, type GetAccountByNumberCommand as G, type ListAccountsCommand as L, ListAccountsUseCase as a, type ClientAccountByNumberProviderPort as b, GetAccountByNumberUseCase as c, type GetConsolidatedAccountsCommand as d, type ConsolidatedAccountsProviderPort as e, ConsolidatedAccountsUseCase as f, type GetAccountMovementsCommand as g, type AccountMovement as h, type AccountMovementsProviderPort as i, ListAccountMovementsUseCase as j, type GetAccountSignersCommand as k, type AccountSigner as l, type AccountSignersInfo as m, type AccountSignersProviderPort as n, GetAccountSignersUseCase as o };

import { P as ProviderCallConfig } from './http-CRaj6wih.js';
import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.js';

interface GetFiscalResidenceCommand {
    clientIdentification: string;
}

interface FiscalResidence {
    firstNames: string;
    lastNames: string;
    birthDateMs: number;
    residenceCountryCode: string;
    residenceProvinceCode: string;
    residenceCityCode: string;
    residenceAddress: string;
}

interface FiscalResidenceQueryProviderPort {
    getFiscalResidence(cmd: GetFiscalResidenceCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<FiscalResidence>>;
}

declare class GetFiscalResidenceUseCase {
    private readonly provider;
    constructor(provider: FiscalResidenceQueryProviderPort);
    execute(cmd: GetFiscalResidenceCommand, http: ProviderCallConfig): Promise<CanonicalResponse<FiscalResidence>>;
}

interface CreateAccountPlusCommand {
    clientIdentification: string;
    clientCoreCode: string;
    platform: string;
    device: string;
    reference: string;
    creationDateMs: number;
    username: string;
}

interface AccountPlusCreation {
    accountNumber: string;
    transactionStatus: boolean;
}

interface AccountPlusCreationProviderPort {
    createAccountPlus(cmd: CreateAccountPlusCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<AccountPlusCreation>>;
}

declare class CreateAccountPlusUseCase {
    private readonly provider;
    constructor(provider: AccountPlusCreationProviderPort);
    execute(cmd: CreateAccountPlusCommand, http: ProviderCallConfig): Promise<CanonicalResponse<AccountPlusCreation>>;
}

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

interface ValidateCreateAccountPlusCommand {
    clientIdentification: string;
}

interface AccountPlusValidation {
    transactionStatus: boolean;
    requiresPepsForm: boolean;
    requiresFiscalResidenceForm: boolean;
}

interface AccountPlusValidationProviderPort {
    validateCreateAccountPlus(cmd: ValidateCreateAccountPlusCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<AccountPlusValidation>>;
}

declare class ValidateCreateAccountPlusUseCase {
    private readonly provider;
    constructor(provider: AccountPlusValidationProviderPort);
    execute(cmd: ValidateCreateAccountPlusCommand, http: ProviderCallConfig): Promise<CanonicalResponse<AccountPlusValidation>>;
}

interface PepsData {
    hasPublicOffice: boolean;
    appointmentDateMs?: number;
    endOfTermDateMs?: number;
    positionName: string;
    institutionName: string;
}
interface SubmitPepsInformationCommand {
    clientIdentification: string;
    pepsData: PepsData;
}

interface PepsInformationSubmission {
    transactionStatus: boolean;
}

interface PepsInformationProviderPort {
    submitPepsInformation(cmd: SubmitPepsInformationCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<PepsInformationSubmission>>;
}

declare class SubmitPepsInformationUseCase {
    private readonly provider;
    constructor(provider: PepsInformationProviderPort);
    execute(cmd: SubmitPepsInformationCommand, http: ProviderCallConfig): Promise<CanonicalResponse<PepsInformationSubmission>>;
}

interface FiscalResidenceData {
    address: string;
    countryCode: string;
    provinceCode: string;
    cityCode: string;
    taxCountryCode: string;
    taxIdentificationNumber: string;
    taxAddress: string;
}
interface SubmitFiscalResidenceCommand {
    clientIdentification: string;
    hasFiscalResidence?: boolean;
    fiscalResidenceData: FiscalResidenceData;
}

interface FiscalResidenceSubmission {
    transactionStatus: boolean;
}

interface FiscalResidenceProviderPort {
    submitFiscalResidence(cmd: SubmitFiscalResidenceCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<FiscalResidenceSubmission>>;
}

declare class SubmitFiscalResidenceUseCase {
    private readonly provider;
    constructor(provider: FiscalResidenceProviderPort);
    execute(cmd: SubmitFiscalResidenceCommand, http: ProviderCallConfig): Promise<CanonicalResponse<FiscalResidenceSubmission>>;
}

interface GenerateAccountPlusDocumentsPdfCommand {
    accountNumber: string;
}

interface AccountPlusDocuments {
    transactionStatus: boolean;
    documentUrl: string;
}

interface AccountPlusDocumentsProviderPort {
    generateAccountPlusDocumentsPdf(cmd: GenerateAccountPlusDocumentsPdfCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<AccountPlusDocuments>>;
}

declare class GenerateAccountPlusDocumentsPdfUseCase {
    private readonly provider;
    constructor(provider: AccountPlusDocumentsProviderPort);
    execute(cmd: GenerateAccountPlusDocumentsPdfCommand, http: ProviderCallConfig): Promise<CanonicalResponse<AccountPlusDocuments>>;
}

export { type Account as A, type GetConsolidatedAccountsCommand as B, type ClientAccountByNumberProviderPort as C, type GetFiscalResidenceCommand as D, GetFiscalResidenceUseCase as E, type FiscalResidence as F, type GenerateAccountPlusDocumentsPdfCommand as G, type ListAccountsCommand as H, ListAccountsUseCase as I, type PepsInformationProviderPort as J, type PepsInformationSubmission as K, ListAccountMovementsUseCase as L, SubmitFiscalResidenceUseCase as M, type SubmitPepsInformationCommand as N, SubmitPepsInformationUseCase as O, type PepsData as P, ValidateCreateAccountPlusUseCase as Q, type SubmitFiscalResidenceCommand as S, type ValidateCreateAccountPlusCommand as V, type AccountMovement as a, type AccountMovementsProviderPort as b, type AccountPlusCreation as c, type AccountPlusCreationProviderPort as d, type AccountPlusDocuments as e, type AccountPlusDocumentsProviderPort as f, type AccountPlusValidation as g, type AccountPlusValidationProviderPort as h, type AccountSigner as i, type AccountSignersInfo as j, type AccountSignersProviderPort as k, type ClientAccountsProviderPort as l, type ConsolidatedAccountsProviderPort as m, ConsolidatedAccountsUseCase as n, type CreateAccountPlusCommand as o, CreateAccountPlusUseCase as p, type FiscalResidenceData as q, type FiscalResidenceProviderPort as r, type FiscalResidenceQueryProviderPort as s, type FiscalResidenceSubmission as t, GenerateAccountPlusDocumentsPdfUseCase as u, type GetAccountByNumberCommand as v, GetAccountByNumberUseCase as w, type GetAccountMovementsCommand as x, type GetAccountSignersCommand as y, GetAccountSignersUseCase as z };

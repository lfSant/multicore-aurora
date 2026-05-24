import { P as ProviderCallConfig } from './http-CRaj6wih.cjs';
import { P as ProviderResult, C as CanonicalResponse } from './types-DZJuEFLS.cjs';

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

interface ValidateCreateAccountCommand {
    clientIdentification: string;
    fingerCode: string;
    clientEmail: string;
    clientPhone: string;
    screenCode: number;
}

interface AccountCreationValidation {
    transactionStatus: boolean;
    isPepsList: boolean;
}

interface AccountCreationValidationProviderPort {
    validateCreateAccount(cmd: ValidateCreateAccountCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<AccountCreationValidation>>;
}

declare class ValidateCreateAccountUseCase {
    private readonly provider;
    constructor(provider: AccountCreationValidationProviderPort);
    execute(cmd: ValidateCreateAccountCommand, http: ProviderCallConfig): Promise<CanonicalResponse<AccountCreationValidation>>;
}

interface ValidateDocumentCommand {
    clientIdentification: string;
    documentType: "cedulaanverso" | "cedulareverso" | "planillaservicio";
    document: string;
}

interface DocumentValidation {
    transactionStatus: boolean;
}

interface DocumentValidationProviderPort {
    validateDocument(cmd: ValidateDocumentCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DocumentValidation>>;
}

declare class ValidateDocumentUseCase {
    private readonly provider;
    constructor(provider: DocumentValidationProviderPort);
    execute(cmd: ValidateDocumentCommand, http: ProviderCallConfig): Promise<CanonicalResponse<DocumentValidation>>;
}

interface BirthInfo {
    birthCountryCode: string;
    birthProvinceCode: string;
    birthCityCode: string;
}
interface ResidenceInfo {
    residenceCountryCode: string;
    residenceProvinceCode: string;
    residenceCityCode: string;
    domicileAddress: string;
}
interface Nationality {
    nationalityCode: string;
    identification?: string;
}
interface SubmitBasicInformationCommand {
    clientIdentification: string;
    clientIdentificationType?: string;
    fingerCode?: string;
    screenCode: number;
    clientNames?: string;
    clientLastNames?: string;
    clientEmail?: string;
    clientPhone?: string;
    birthDateMs?: number;
    homePhone?: string;
    maritalStatus?: string;
    maritalStatusCode?: string;
    spouseId?: string;
    gender?: string;
    genderCode: string;
    educationLevel?: string;
    educationLevelCode?: string;
    signaturePhotoUrl?: string;
    idPhotoUrl?: string;
    accountType?: string;
    birthInfo?: BirthInfo[];
    residenceInfo: ResidenceInfo[];
    nationalities: Nationality[];
}

interface BasicInformationSubmission {
    transactionStatus: boolean;
}

interface BasicInformationSubmissionProviderPort {
    submitBasicInformation(cmd: SubmitBasicInformationCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<BasicInformationSubmission>>;
}

declare class SubmitBasicInformationUseCase {
    private readonly provider;
    constructor(provider: BasicInformationSubmissionProviderPort);
    execute(cmd: SubmitBasicInformationCommand, http: ProviderCallConfig): Promise<CanonicalResponse<BasicInformationSubmission>>;
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
    taxCountryCode?: string;
    taxIdentificationNumber?: string;
    taxAddress?: string;
}
interface FiscalResidenceItem {
    countryCode: string;
    taxId: string;
    provinceCode?: string;
    cityCode?: string;
}
interface SubmitFiscalResidenceCommand {
    clientIdentification: string;
    hasFiscalResidence?: boolean;
    fiscalResidenceData?: FiscalResidenceData;
    codeWindow?: number;
    fiscalResidenceList?: FiscalResidenceItem[];
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

interface LaborInfoItem {
    laborRelationCode: string;
    professionCode: string;
    economicActivityCode: string;
    workplaceName: string;
    jobPositionCode: string;
    workStartDate: string;
    workCountryCode?: string;
    workProvinceCode?: string;
    workCityCode?: string;
    workAddress: string;
    workPhone: string;
    workPhoneExtension?: string;
    houseNumber?: string;
    sector?: string;
}
interface EconomicInfoItem {
    income: string;
    expenses: string;
    assets: string;
    liabilities: string;
    purposeCode?: string;
    managementAmount?: string;
}
interface SubmitLaborInformationCommand {
    clientIdentification: string;
    screenCode: number;
    laborInfo: LaborInfoItem[];
    economicInfo: EconomicInfoItem[];
}

interface LaborInformationSubmission {
    transactionStatus: boolean;
}

interface LaborInformationSubmissionProviderPort {
    submitLaborInformation(cmd: SubmitLaborInformationCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<LaborInformationSubmission>>;
}

declare class SubmitLaborInformationUseCase {
    private readonly provider;
    constructor(provider: LaborInformationSubmissionProviderPort);
    execute(cmd: SubmitLaborInformationCommand, http: ProviderCallConfig): Promise<CanonicalResponse<LaborInformationSubmission>>;
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

interface CargoData {
    hasPublicOffice: boolean;
    appointmentDateMs?: number;
    endOfTermDateMs?: number;
    positionName: string;
    institutionName: string;
}
interface PepsAccountOpeningCommand {
    clientIdentification: string;
    screenCode: string;
    cargoData: CargoData[];
}

interface PepsAccountOpening {
    transactionStatus: boolean;
}

interface PepsAccountOpeningProviderPort {
    pepsAccountOpening(cmd: PepsAccountOpeningCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<PepsAccountOpening>>;
}

declare class PepsAccountOpeningUseCase {
    private readonly provider;
    constructor(provider: PepsAccountOpeningProviderPort);
    execute(cmd: PepsAccountOpeningCommand, http: ProviderCallConfig): Promise<CanonicalResponse<PepsAccountOpening>>;
}

export { PepsAccountOpeningUseCase as $, type Account as A, type BasicInformationSubmission as B, type CargoData as C, type DocumentValidation as D, type EconomicInfoItem as E, type FiscalResidence as F, type FiscalResidenceSubmission as G, type GenerateAccountPlusDocumentsPdfCommand as H, GenerateAccountPlusDocumentsPdfUseCase as I, type GetAccountByNumberCommand as J, GetAccountByNumberUseCase as K, type GetAccountMovementsCommand as L, type GetAccountSignersCommand as M, GetAccountSignersUseCase as N, type GetConsolidatedAccountsCommand as O, type GetFiscalResidenceCommand as P, GetFiscalResidenceUseCase as Q, type LaborInfoItem as R, type LaborInformationSubmission as S, type LaborInformationSubmissionProviderPort as T, ListAccountMovementsUseCase as U, type ListAccountsCommand as V, ListAccountsUseCase as W, type Nationality as X, type PepsAccountOpening as Y, type PepsAccountOpeningCommand as Z, type PepsAccountOpeningProviderPort as _, type AccountCreationValidation as a, type PepsData as a0, type PepsInformationProviderPort as a1, type PepsInformationSubmission as a2, type ResidenceInfo as a3, type SubmitBasicInformationCommand as a4, SubmitBasicInformationUseCase as a5, type SubmitFiscalResidenceCommand as a6, SubmitFiscalResidenceUseCase as a7, type SubmitLaborInformationCommand as a8, SubmitLaborInformationUseCase as a9, type SubmitPepsInformationCommand as aa, SubmitPepsInformationUseCase as ab, type ValidateCreateAccountCommand as ac, type ValidateCreateAccountPlusCommand as ad, ValidateCreateAccountPlusUseCase as ae, ValidateCreateAccountUseCase as af, type ValidateDocumentCommand as ag, ValidateDocumentUseCase as ah, type AccountCreationValidationProviderPort as b, type AccountMovement as c, type AccountMovementsProviderPort as d, type AccountPlusCreation as e, type AccountPlusCreationProviderPort as f, type AccountPlusDocuments as g, type AccountPlusDocumentsProviderPort as h, type AccountPlusValidation as i, type AccountPlusValidationProviderPort as j, type AccountSigner as k, type AccountSignersInfo as l, type AccountSignersProviderPort as m, type BasicInformationSubmissionProviderPort as n, type BirthInfo as o, type ClientAccountByNumberProviderPort as p, type ClientAccountsProviderPort as q, type ConsolidatedAccountsProviderPort as r, ConsolidatedAccountsUseCase as s, type CreateAccountPlusCommand as t, CreateAccountPlusUseCase as u, type DocumentValidationProviderPort as v, type FiscalResidenceData as w, type FiscalResidenceItem as x, type FiscalResidenceProviderPort as y, type FiscalResidenceQueryProviderPort as z };

import { P as ProviderCallConfig } from './http-CRaj6wih.cjs';
import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.cjs';

interface GetConsolidatedTimeDepositsCommand {
    clientNumber: number;
    companySequential?: number;
    isActive?: boolean;
}

interface TimeDeposit {
    sequential: number;
    code: string;
    depositType: string;
    currency: string;
    status: string;
    dueDate: string;
    amount: string;
    collectionInterestBalance: string;
    calculationInterestBalance: string;
}

interface ConsolidatedTimeDepositsProviderPort {
    getConsolidatedTimeDeposits(cmd: GetConsolidatedTimeDepositsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<TimeDeposit[]>>;
}

declare class GetConsolidatedTimeDepositsUseCase {
    private readonly provider;
    constructor(provider: ConsolidatedTimeDepositsProviderPort);
    execute(cmd: GetConsolidatedTimeDepositsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<TimeDeposit[]>>;
}

interface GetDepositMovementsCommand {
    depositSequential: number;
    startDate: string;
    endDate: string;
    companySequential?: number;
}

interface DepositMovement {
    date: string;
    document: string;
    transaction: string;
    amount: string;
    balance: string;
    causal: string;
    office: string;
    user: string;
}

interface DepositMovementsProviderPort {
    getDepositMovements(cmd: GetDepositMovementsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DepositMovement[]>>;
}

declare class GetDepositMovementsUseCase {
    private readonly provider;
    constructor(provider: DepositMovementsProviderPort);
    execute(cmd: GetDepositMovementsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<DepositMovement[]>>;
}

interface DpfProductCatalog {
    productCode: number;
    description?: string;
    paymentType?: string;
    minAmount: string;
    maxAmount: string;
    minTerm: number;
    maxTerm: number;
    currency?: string;
    nominalRate?: number;
    effectiveAnnualRate?: number;
    validFromMs?: number;
    validToMs?: number;
}

interface DpfProductsCatalogProviderPort {
    getDpfProductsCatalog(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DpfProductCatalog>>;
}

declare class ListDpfProductsCatalogUseCase {
    private readonly provider;
    constructor(provider: DpfProductsCatalogProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<DpfProductCatalog>>;
}

interface CalculateDpfValuesCommand {
    productCode: number;
    termDays: number;
    investmentAmount: string;
    transactionPlatform: string;
    transactionDate: string;
    transactionDevice: string;
    transactionReference: string;
    transactionNotes: string;
    clientIdentification: string;
    clientName: string;
    username: string;
}

interface DpfPaymentSchedule {
    period: number;
    dateMs: number;
    interestAmount: string;
    taxAmount: string;
    netPaymentAmount: string;
    accumulatedAmount: string;
}
interface DpfCalculation {
    transactionStatus: boolean;
    paymentType?: string;
    principalAmount: string;
    termDays: number;
    issueDate?: string;
    maturityDate: string;
    interestRate: number;
    totalInterestAmount: string;
    monthlyInterestAmount?: string;
    taxAmount: string;
    netInterestAmount?: string;
    totalPayoutAmount: string;
    paymentSchedule?: DpfPaymentSchedule[];
}

interface DpfCalculationProviderPort {
    calculateDpfValues(cmd: CalculateDpfValuesCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DpfCalculation>>;
}

declare class CalculateDpfValuesUseCase {
    private readonly provider;
    constructor(provider: DpfCalculationProviderPort);
    execute(cmd: CalculateDpfValuesCommand, http: ProviderCallConfig): Promise<CanonicalResponse<DpfCalculation>>;
}

interface CreateDpfCommand {
    accountNumber: string;
    productCode: number;
    termDays: number;
    investmentAmount: string;
    interestRate: number;
    transactionPlatform: string;
    transactionDate: string;
    transactionDevice: string;
    transactionReference: string;
    transactionNotes: string;
    clientIdentification: string;
    clientName: string;
    username: string;
}

interface DpfCreation {
    transactionStatus: boolean;
    documentNumber?: number;
    principalAmount?: string;
    termDays?: number;
    productCode?: number;
    paymentType?: string;
    calculatedInterest?: string;
    interestRate?: number;
    calculatedTax?: string;
    issueDateMs?: number;
    maturityDateMs?: number;
    totalPayoutAmount?: string;
    clientIdentification?: string;
}

interface CreateDpfProviderPort {
    createDpf(cmd: CreateDpfCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DpfCreation>>;
}

declare class CreateDpfUseCase {
    private readonly provider;
    constructor(provider: CreateDpfProviderPort);
    execute(cmd: CreateDpfCommand, http: ProviderCallConfig): Promise<CanonicalResponse<DpfCreation>>;
}

interface GetDpfReceiptCommand {
    transactionReference: string;
}

interface DpfReceipt {
    transactionStatus: boolean;
    receiptUrl: string;
}

interface DpfReceiptProviderPort {
    getDpfReceipt(cmd: GetDpfReceiptCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DpfReceipt>>;
}

declare class GetDpfReceiptUseCase {
    private readonly provider;
    constructor(provider: DpfReceiptProviderPort);
    execute(cmd: GetDpfReceiptCommand, http: ProviderCallConfig): Promise<CanonicalResponse<DpfReceipt>>;
}

interface GetSelfCertificationDataCommand {
    clientIdentification: string;
}

interface SelfCertificationDataResult {
    success: boolean;
    data: SelfCertificationData;
    citiesCatalogList: CityCatalog[];
    provincesCatalogList: ProvinceCatalog[];
    countriesCatalogList: CountryCatalog[];
}
interface SelfCertificationData {
    clientIdentification: string;
    date: string;
    productNumber: string;
    fiscalResidenceList: FiscalResidenceList[];
    personIdentification: PersonIdentification;
}
interface FiscalResidenceList {
    personType: string;
    isUsCitizen: boolean;
    usIdentification: string;
    residesInOtherCountries: boolean;
    countriesOfResidenceList: CountryOfResidenceList[];
}
interface CountryOfResidenceList {
    countryCode: string;
    countryDescription: string;
    nationality?: string | null;
    address?: string;
    identification?: string;
}
interface PersonIdentification {
    lastNames: string;
    names: string;
    birthDate: string;
    birthCountry: BirthCountry;
    birthCity: BirthCity;
    residenceAddress: ResidenceAddress;
}
interface BirthCountry {
    countryCode: string;
    countryDescription: string;
    nationality?: string | null;
}
interface BirthCity {
    cityCode: string;
    cityDescription: string;
}
interface ResidenceAddress {
    addressId: string;
    address: string;
    country: AddressCountry;
    province: AddressProvince;
    postalCode: string;
    city?: AddressCity;
}
interface AddressCountry {
    countryCode: string;
    countryDescription: string;
    nationality?: string | null;
}
interface AddressProvince {
    provinceCode: string;
    provinceDescription: string;
}
interface AddressCity {
    cityCode: string;
    cityDescription: string;
}
interface CityCatalog {
    cityCode: string;
    cityDescription: string;
}
interface ProvinceCatalog {
    provinceCode: string;
    provinceDescription: string;
}
interface CountryCatalog {
    countryCode: string;
    countryDescription: string;
    nationality?: string | null;
}

interface SelfCertificationDataProviderPort {
    getSelfCertificationData(cmd: GetSelfCertificationDataCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<SelfCertificationDataResult>>;
}

declare class SelfCertificationDataUseCase {
    private readonly provider;
    constructor(provider: SelfCertificationDataProviderPort);
    execute(cmd: GetSelfCertificationDataCommand, http: ProviderCallConfig): Promise<CanonicalResponse<SelfCertificationDataResult>>;
}

interface SaveSelfCertificationDataCommand {
    clientIdentification: string;
    date: string;
    productNumber: string;
    fiscalResidenceList: Array<any>;
    personIdentification: Record<string, any>;
}

interface SaveSelfCertificationDataResult {
    success: boolean;
}

interface SaveSelfCertificationDataProviderPort {
    saveSelfCertificationData(cmd: SaveSelfCertificationDataCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<SaveSelfCertificationDataResult>>;
}

declare class SaveSelfCertificationDataUseCase {
    private readonly provider;
    constructor(provider: SaveSelfCertificationDataProviderPort);
    execute(cmd: SaveSelfCertificationDataCommand, http: ProviderCallConfig): Promise<CanonicalResponse<SaveSelfCertificationDataResult>>;
}

export { type AddressCity as A, type BirthCity as B, type CalculateDpfValuesCommand as C, type DepositMovement as D, type ProvinceCatalog as E, type FiscalResidenceList as F, type GetConsolidatedTimeDepositsCommand as G, type SaveSelfCertificationDataProviderPort as H, type SaveSelfCertificationDataResult as I, SaveSelfCertificationDataUseCase as J, type SelfCertificationData as K, ListDpfProductsCatalogUseCase as L, type SelfCertificationDataProviderPort as M, type SelfCertificationDataResult as N, SelfCertificationDataUseCase as O, type PersonIdentification as P, type ResidenceAddress as R, type SaveSelfCertificationDataCommand as S, type TimeDeposit as T, type AddressCountry as a, type AddressProvince as b, type BirthCountry as c, CalculateDpfValuesUseCase as d, type CityCatalog as e, type ConsolidatedTimeDepositsProviderPort as f, type CountryCatalog as g, type CountryOfResidenceList as h, type CreateDpfCommand as i, type CreateDpfProviderPort as j, CreateDpfUseCase as k, type DepositMovementsProviderPort as l, type DpfCalculation as m, type DpfCalculationProviderPort as n, type DpfCreation as o, type DpfPaymentSchedule as p, type DpfProductCatalog as q, type DpfProductsCatalogProviderPort as r, type DpfReceipt as s, type DpfReceiptProviderPort as t, GetConsolidatedTimeDepositsUseCase as u, type GetDepositMovementsCommand as v, GetDepositMovementsUseCase as w, type GetDpfReceiptCommand as x, GetDpfReceiptUseCase as y, type GetSelfCertificationDataCommand as z };

import { P as ProviderCallConfig } from './http-CRaj6wih.js';
import { P as ProviderResult, C as CanonicalResponse } from './types-DZJuEFLS.js';

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
    requestDate: string;
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
    code: string;
    depositType: string;
    transactionCode: string;
    reasonCode: string;
    officeCode: string;
    platform: string;
    platformCode: string;
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
    clientNumber: string;
    depositTypeCode: string;
    currency: string;
    interestPaymentMode: string;
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
    nominalRate: number;
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
    clientNumber: number;
    cancellationTypeCode: string;
    netRateValue: number;
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

interface DepositTypeCatalogItem {
    code: string;
    name: string;
    allowsPeriodicInterestPayment: boolean;
    additionalInformation: string;
}

interface DepositTypeCatalogProviderPort {
    getDepositTypeCatalog(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DepositTypeCatalogItem[]>>;
}

declare class GetDepositTypeCatalogUseCase {
    private readonly provider;
    constructor(provider: DepositTypeCatalogProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<DepositTypeCatalogItem[]>>;
}

interface GetDepositTypePresumptiveRequirementsCommand {
    depositTypeCode: string;
}

interface DepositTypePaymentPeriod {
    code: string;
    name: string;
    numberOfDays: number;
}
interface DepositTypePresumptiveRequirements {
    capitalComponentSequential: number;
    paymentPeriods: DepositTypePaymentPeriod[];
}

interface DepositTypePresumptiveRequirementsProviderPort {
    getDepositTypePresumptiveRequirements(cmd: GetDepositTypePresumptiveRequirementsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DepositTypePresumptiveRequirements>>;
}

declare class GetDepositTypePresumptiveRequirementsUseCase {
    private readonly provider;
    constructor(provider: DepositTypePresumptiveRequirementsProviderPort);
    execute(cmd: GetDepositTypePresumptiveRequirementsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<DepositTypePresumptiveRequirements>>;
}

interface GetDepositCancellationTypesCommand {
    depositTypeCode: string;
}

interface DepositCancellationType {
    code: string;
    name: string;
    additionalInformation: string;
}
interface DepositCancellationTypes {
    cancellationTypes: DepositCancellationType[];
}

interface DepositCancellationTypesProviderPort {
    getDepositCancellationTypes(cmd: GetDepositCancellationTypesCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DepositCancellationTypes>>;
}

declare class GetDepositCancellationTypesUseCase {
    private readonly provider;
    constructor(provider: DepositCancellationTypesProviderPort);
    execute(cmd: GetDepositCancellationTypesCommand, http: ProviderCallConfig): Promise<CanonicalResponse<DepositCancellationTypes>>;
}

interface GetFixedTermDepositCurrentRatesCommand {
    depositTypeCode: string;
    currency: string;
}

interface FixedTermDepositCurrentRate {
    depositTypeCode: string;
    currency: string;
    termInDaysMin: number;
    termInDaysMax: number;
    amountMin: number;
    amountMax: number;
    nominalRate: number;
    effectiveAnnualRate: number;
    validFrom: string;
    validTo: string;
}

interface FixedTermDepositCurrentRatesProviderPort {
    getFixedTermDepositCurrentRates(cmd: GetFixedTermDepositCurrentRatesCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<FixedTermDepositCurrentRate[]>>;
}

declare class GetFixedTermDepositCurrentRatesUseCase {
    private readonly provider;
    constructor(provider: FixedTermDepositCurrentRatesProviderPort);
    execute(cmd: GetFixedTermDepositCurrentRatesCommand, http: ProviderCallConfig): Promise<CanonicalResponse<FixedTermDepositCurrentRate[]>>;
}

interface GetDepositAdditionalInformationCommand {
    depositNumber: string;
}

interface DepositComponent {
    sequential: number;
    name: string;
    balance: number;
}
interface DepositScheduleItem {
    period: number;
    dateMs: number;
    interestAmount: string;
    taxAmount: string;
    netPaymentAmount: string;
    accumulatedAmount: string;
}
interface DepositAdditionalInformation {
    depositNumber: string;
    branchName: string;
    productName: string;
    nominalRate: number;
    rateVariance: number;
    termInDays: number;
    effectiveAnnualRate: number;
    endorsed: string;
    taxWithholding: number;
    maturityAmount: number;
    components: DepositComponent[];
    schedule: DepositScheduleItem[];
}

interface DepositAdditionalInformationProviderPort {
    getDepositAdditionalInformation(cmd: GetDepositAdditionalInformationCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DepositAdditionalInformation>>;
}

declare class GetDepositAdditionalInformationUseCase {
    private readonly provider;
    constructor(provider: DepositAdditionalInformationProviderPort);
    execute(cmd: GetDepositAdditionalInformationCommand, http: ProviderCallConfig): Promise<CanonicalResponse<DepositAdditionalInformation>>;
}

interface ValidateFixedTermDepositCommand {
    depositNumber: string;
    identificationNumber: string;
    date: string;
}

interface FixedTermDepositValidation {
    clientNumber: number;
    partner?: string;
    depositNumber: string | null;
    depositType: string | null;
    depositTypeCode: string | null;
    capital: number;
    interest: number;
    financialReturns: number;
    totalValue: number;
    termInDays: number;
    rate: number;
    status: string | null;
    statusCode: string | null;
    date: string | null;
    expiryDate: string | null;
}

interface FixedTermDepositValidationProviderPort {
    validateFixedTermDeposit(cmd: ValidateFixedTermDepositCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<FixedTermDepositValidation>>;
}

declare class ValidateFixedTermDepositUseCase {
    private readonly provider;
    constructor(provider: FixedTermDepositValidationProviderPort);
    execute(cmd: ValidateFixedTermDepositCommand, http: ProviderCallConfig): Promise<CanonicalResponse<FixedTermDepositValidation>>;
}

export { GetDpfReceiptUseCase as $, type AddressCity as A, type BirthCity as B, type CalculateDpfValuesCommand as C, type DepositAdditionalInformation as D, type DpfCreation as E, type DpfPaymentSchedule as F, type DpfProductCatalog as G, type DpfProductsCatalogProviderPort as H, type DpfReceipt as I, type DpfReceiptProviderPort as J, type FiscalResidenceList as K, type FixedTermDepositCurrentRate as L, type FixedTermDepositCurrentRatesProviderPort as M, type FixedTermDepositValidation as N, type FixedTermDepositValidationProviderPort as O, type GetConsolidatedTimeDepositsCommand as P, GetConsolidatedTimeDepositsUseCase as Q, type GetDepositAdditionalInformationCommand as R, GetDepositAdditionalInformationUseCase as S, type GetDepositCancellationTypesCommand as T, GetDepositCancellationTypesUseCase as U, type GetDepositMovementsCommand as V, GetDepositMovementsUseCase as W, GetDepositTypeCatalogUseCase as X, type GetDepositTypePresumptiveRequirementsCommand as Y, GetDepositTypePresumptiveRequirementsUseCase as Z, type GetDpfReceiptCommand as _, type AddressCountry as a, type GetFixedTermDepositCurrentRatesCommand as a0, GetFixedTermDepositCurrentRatesUseCase as a1, type GetSelfCertificationDataCommand as a2, ListDpfProductsCatalogUseCase as a3, type PersonIdentification as a4, type ProvinceCatalog as a5, type ResidenceAddress as a6, type SaveSelfCertificationDataCommand as a7, type SaveSelfCertificationDataProviderPort as a8, type SaveSelfCertificationDataResult as a9, SaveSelfCertificationDataUseCase as aa, type SelfCertificationData as ab, type SelfCertificationDataProviderPort as ac, type SelfCertificationDataResult as ad, SelfCertificationDataUseCase as ae, type TimeDeposit as af, type ValidateFixedTermDepositCommand as ag, ValidateFixedTermDepositUseCase as ah, type AddressProvince as b, type BirthCountry as c, CalculateDpfValuesUseCase as d, type CityCatalog as e, type ConsolidatedTimeDepositsProviderPort as f, type CountryCatalog as g, type CountryOfResidenceList as h, type CreateDpfCommand as i, type CreateDpfProviderPort as j, CreateDpfUseCase as k, type DepositAdditionalInformationProviderPort as l, type DepositCancellationType as m, type DepositCancellationTypes as n, type DepositCancellationTypesProviderPort as o, type DepositComponent as p, type DepositMovement as q, type DepositMovementsProviderPort as r, type DepositScheduleItem as s, type DepositTypeCatalogItem as t, type DepositTypeCatalogProviderPort as u, type DepositTypePaymentPeriod as v, type DepositTypePresumptiveRequirements as w, type DepositTypePresumptiveRequirementsProviderPort as x, type DpfCalculation as y, type DpfCalculationProviderPort as z };

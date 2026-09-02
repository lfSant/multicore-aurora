import { P as ProviderCallConfig } from './http-CRaj6wih.js';
import { P as ProviderResult, C as CanonicalResponse } from './types-DZJuEFLS.js';
import { C as CoreRequestContext } from './CoreRequestContext-C5PImHcm.js';

interface MaritalStatus {
    code: string;
    name: string;
    extras?: Record<string, any>;
}

interface MaritalStatusProviderPort {
    getMaritalStatus(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<MaritalStatus[]>>;
}

declare class MaritalStatusUseCase {
    private readonly provider;
    constructor(provider: MaritalStatusProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<MaritalStatus[]>>;
}

interface GetPersonCatalogsCommand {
    context?: CoreRequestContext;
}

interface PersonCatalogItem {
    code: string;
    name: string;
}
interface PersonCatalogs {
    maritalStatus: PersonCatalogItem[];
    educationType: PersonCatalogItem[];
    profession: PersonCatalogItem[];
    housingType: PersonCatalogItem[];
    personType: PersonCatalogItem[];
    identificationType: PersonCatalogItem[];
    gender: PersonCatalogItem[];
    dataConsentState: PersonCatalogItem[];
}

interface PersonCatalogsProviderPort {
    getPersonCatalogs(cmd: GetPersonCatalogsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<PersonCatalogs>>;
}

declare class GetPersonCatalogsUseCase {
    private readonly provider;
    constructor(provider: PersonCatalogsProviderPort);
    execute(cmd: GetPersonCatalogsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<PersonCatalogs>>;
}

interface GetInstitutionCatalogsCommand {
    context?: CoreRequestContext;
}

interface Currency {
    sequential: string;
    name: string;
    isoCode: string;
}
interface Branch {
    sequential: string;
    name: string;
}
interface Office {
    sequential: string;
    name: string;
    branchSequential: string;
}
interface Province {
    code: string;
    name: string;
}
interface City {
    code: string;
    name: string;
    provinceCode: string;
}
interface Country {
    code: string;
    name: string;
}
interface Channel {
    code: string;
    name: string;
}
interface Origin {
    code: string;
    name: string;
}
interface InstitutionCatalogs {
    currencies: Currency[];
    branches: Branch[];
    offices: Office[];
    provinces: Province[];
    cities: City[];
    countries: Country[];
    channels: Channel[];
    origins: Origin[];
}

interface InstitutionCatalogsProviderPort {
    getInstitutionCatalogs(cmd: GetInstitutionCatalogsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<InstitutionCatalogs>>;
}

declare class GetInstitutionCatalogsUseCase {
    private readonly provider;
    constructor(provider: InstitutionCatalogsProviderPort);
    execute(cmd: GetInstitutionCatalogsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<InstitutionCatalogs>>;
}

interface GetFinancialProductCatalogsCommand {
    context?: CoreRequestContext;
}

interface FinancialProductCatalogItem {
    code: string;
    name: string;
}
interface FinancialProductCatalogs {
    accountTypes: FinancialProductCatalogItem[];
    accountStatuses: FinancialProductCatalogItem[];
    personSignatureTypes: FinancialProductCatalogItem[];
    companySignatureTypes: FinancialProductCatalogItem[];
    depositTypes: FinancialProductCatalogItem[];
    depositStatuses: FinancialProductCatalogItem[];
    depositFrequencies: FinancialProductCatalogItem[];
    creditStatuses: FinancialProductCatalogItem[];
    creditRelations: FinancialProductCatalogItem[];
    transactionTypes: FinancialProductCatalogItem[];
}

interface FinancialProductCatalogsProviderPort {
    getFinancialProductCatalogs(cmd: GetFinancialProductCatalogsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<FinancialProductCatalogs>>;
}

declare class GetFinancialProductCatalogsUseCase {
    private readonly provider;
    constructor(provider: FinancialProductCatalogsProviderPort);
    execute(cmd: GetFinancialProductCatalogsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<FinancialProductCatalogs>>;
}

interface EducationTypes {
    code: string;
    name: string;
    extras?: Record<string, any>;
}

interface EducationTypesProviderPort {
    getEducationTypes(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<EducationTypes[]>>;
}

declare class EducationTypesUseCase {
    private readonly provider;
    constructor(provider: EducationTypesProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<EducationTypes[]>>;
}

interface GetCatalogFitCommand {
    catalogType: string;
    filter: string;
}

interface CatalogFitItem {
    code: string;
    description: string;
}

interface CatalogFitProviderPort {
    catalogFilter(cmd: GetCatalogFitCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<CatalogFitItem[]>>;
}

declare class GetCatalogFitUseCase {
    private readonly provider;
    constructor(provider: CatalogFitProviderPort);
    execute(cmd: GetCatalogFitCommand, http: ProviderCallConfig): Promise<CanonicalResponse<CatalogFitItem[]>>;
}

interface EconomicActivity {
    code: string;
    name: string;
    extras?: Record<string, any>;
}

interface EconomicActivityCatalogProviderPort {
    getEconomicActivityCatalog(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<EconomicActivity[]>>;
}

declare class GetEconomicActivityCatalogUseCase {
    private readonly provider;
    constructor(provider: EconomicActivityCatalogProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<EconomicActivity[]>>;
}

interface OtherEconomicActivityCatalogProviderPort {
    getOtherEconomicActivityCatalog(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<EconomicActivity[]>>;
}

declare class GetOtherEconomicActivityCatalogUseCase {
    private readonly provider;
    constructor(provider: OtherEconomicActivityCatalogProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<EconomicActivity[]>>;
}

interface ProfessionTypes {
    code: string;
    name: string;
    extras?: Record<string, any>;
}

interface ProfessionTypesProviderPort {
    getProfessionTypes(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ProfessionTypes[]>>;
}

declare class ProfessionTypesUseCase {
    private readonly provider;
    constructor(provider: ProfessionTypesProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<ProfessionTypes[]>>;
}

interface LaborPosition {
    code: string;
    name: string;
    extras?: Record<string, any>;
}

interface LaborPositionCatalogProviderPort {
    getLaborPositionCatalog(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<LaborPosition[]>>;
}

declare class GetLaborPositionCatalogUseCase {
    private readonly provider;
    constructor(provider: LaborPositionCatalogProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<LaborPosition[]>>;
}

interface PurposeCatalogItem {
    code: string;
    description: string;
}

interface PurposeCatalogProviderPort {
    getPurposeCatalog(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<PurposeCatalogItem[]>>;
}

declare class GetPurposeCatalogUseCase {
    private readonly provider;
    constructor(provider: PurposeCatalogProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<PurposeCatalogItem[]>>;
}

interface GetCardDeliveryLocationCatalogCommand {
    clientIdentification: string;
}

interface CardDeliveryLocation {
    lugarEntregaCodigo: string;
    lugarEntregaDescripcion: string;
}

interface CardDeliveryLocationCatalogProviderPort {
    getCardDeliveryLocationCatalog(cmd: GetCardDeliveryLocationCatalogCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<CardDeliveryLocation[]>>;
}

declare class GetCardDeliveryLocationCatalogUseCase {
    private readonly provider;
    constructor(provider: CardDeliveryLocationCatalogProviderPort);
    execute(cmd: GetCardDeliveryLocationCatalogCommand, http: ProviderCallConfig): Promise<CanonicalResponse<CardDeliveryLocation[]>>;
}

interface SubmitCardDeliveryInfoCommand {
    clientIdentification: string;
    screenCode: string;
    deliveryLocationCode: string;
    deliveryCoordinateX?: string;
    deliveryCoordinateY?: string;
    cardNameCode: string;
    deliveryReference: string;
}

interface CardDeliveryInfoSubmission {
    transactionStatus: boolean;
}

interface CardDeliveryInfoSubmissionProviderPort {
    submitCardDeliveryInfo(cmd: SubmitCardDeliveryInfoCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<CardDeliveryInfoSubmission>>;
}

declare class SubmitCardDeliveryInfoUseCase {
    private readonly provider;
    constructor(provider: CardDeliveryInfoSubmissionProviderPort);
    execute(cmd: SubmitCardDeliveryInfoCommand, http: ProviderCallConfig): Promise<CanonicalResponse<CardDeliveryInfoSubmission>>;
}

interface GetCatalogCardNamesCommand {
    clientIdentification: string;
}

interface CardName {
    nameCode: string;
    nameDescription: string;
}

interface CatalogCardNamesProviderPort {
    getCatalogCardNames(cmd: GetCatalogCardNamesCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<CardName[]>>;
}

declare class GetCatalogCardNamesUseCase {
    private readonly provider;
    constructor(provider: CatalogCardNamesProviderPort);
    execute(cmd: GetCatalogCardNamesCommand, http: ProviderCallConfig): Promise<CanonicalResponse<CardName[]>>;
}

interface PaymentServiceConcepts {
    code: string;
    name: string;
    identifier: string;
    product: string;
    category: string;
    subCategory?: string;
    codeCop?: string;
    commission?: string;
    status?: string;
    referenceLengthMax?: string;
    referenceLengthMin?: string;
    referenceDataType?: string;
    onlineReversal?: string;
    hasOtp?: string;
    controlType?: string;
    paymentType?: string;
    productType?: string;
    transactionType?: string;
    queryTrxType?: string;
    paymentTrxType?: string;
    reversalTrxType?: string;
    referenceTitle?: string;
    extras?: Record<string, any>;
}

interface PaymentServiceConceptsProviderPort {
    getPaymentServiceConcepts(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<PaymentServiceConcepts[]>>;
}

declare class PaymentServiceConceptsUseCase {
    private readonly provider;
    constructor(provider: PaymentServiceConceptsProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<PaymentServiceConcepts[]>>;
}

interface GetCardDeliveryInfoCommand {
    clientIdentification: string;
}

interface CardDeliveryInfo {
    deliveryLocationCode: string;
    locationCoordinateX?: string;
    locationCoordinateY?: string;
    cardNameCode: string;
    deliveryReference: string;
}

interface CardDeliveryInfoProviderPort {
    getCardDeliveryInfo(cmd: GetCardDeliveryInfoCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<CardDeliveryInfo>>;
}

declare class GetCardDeliveryInfoUseCase {
    private readonly provider;
    constructor(provider: CardDeliveryInfoProviderPort);
    execute(cmd: GetCardDeliveryInfoCommand, http: ProviderCallConfig): Promise<CanonicalResponse<CardDeliveryInfo>>;
}

export { PaymentServiceConceptsUseCase as $, GetEconomicActivityCatalogUseCase as A, type Branch as B, type CardDeliveryInfo as C, type GetFinancialProductCatalogsCommand as D, type EconomicActivity as E, type FinancialProductCatalogItem as F, type GetCardDeliveryInfoCommand as G, GetFinancialProductCatalogsUseCase as H, type GetInstitutionCatalogsCommand as I, GetInstitutionCatalogsUseCase as J, GetLaborPositionCatalogUseCase as K, GetOtherEconomicActivityCatalogUseCase as L, type GetPersonCatalogsCommand as M, GetPersonCatalogsUseCase as N, GetPurposeCatalogUseCase as O, type InstitutionCatalogs as P, type InstitutionCatalogsProviderPort as Q, type LaborPosition as R, type LaborPositionCatalogProviderPort as S, type MaritalStatus as T, type MaritalStatusProviderPort as U, MaritalStatusUseCase as V, type Office as W, type Origin as X, type OtherEconomicActivityCatalogProviderPort as Y, type PaymentServiceConcepts as Z, type PaymentServiceConceptsProviderPort as _, type CardDeliveryInfoProviderPort as a, type PersonCatalogItem as a0, type PersonCatalogs as a1, type PersonCatalogsProviderPort as a2, type ProfessionTypes as a3, type ProfessionTypesProviderPort as a4, ProfessionTypesUseCase as a5, type Province as a6, type PurposeCatalogItem as a7, type PurposeCatalogProviderPort as a8, type SubmitCardDeliveryInfoCommand as a9, SubmitCardDeliveryInfoUseCase as aa, type CardDeliveryInfoSubmission as b, type CardDeliveryInfoSubmissionProviderPort as c, type CardDeliveryLocation as d, type CardDeliveryLocationCatalogProviderPort as e, type CardName as f, type CatalogCardNamesProviderPort as g, type CatalogFitItem as h, type CatalogFitProviderPort as i, type Channel as j, type City as k, type Country as l, type Currency as m, type EconomicActivityCatalogProviderPort as n, type EducationTypes as o, type EducationTypesProviderPort as p, EducationTypesUseCase as q, type FinancialProductCatalogs as r, type FinancialProductCatalogsProviderPort as s, GetCardDeliveryInfoUseCase as t, type GetCardDeliveryLocationCatalogCommand as u, GetCardDeliveryLocationCatalogUseCase as v, type GetCatalogCardNamesCommand as w, GetCatalogCardNamesUseCase as x, type GetCatalogFitCommand as y, GetCatalogFitUseCase as z };

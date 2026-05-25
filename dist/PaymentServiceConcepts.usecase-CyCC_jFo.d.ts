import { P as ProviderCallConfig } from './http-CRaj6wih.js';
import { P as ProviderResult, C as CanonicalResponse } from './types-DZJuEFLS.js';

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

export { SubmitCardDeliveryInfoUseCase as A, type CardDeliveryInfoSubmission as C, type EconomicActivity as E, type GetCardDeliveryLocationCatalogCommand as G, type LaborPosition as L, type MaritalStatus as M, type OtherEconomicActivityCatalogProviderPort as O, type PaymentServiceConcepts as P, type SubmitCardDeliveryInfoCommand as S, type CardDeliveryInfoSubmissionProviderPort as a, type CardDeliveryLocation as b, type CardDeliveryLocationCatalogProviderPort as c, type CatalogFitItem as d, type CatalogFitProviderPort as e, type EconomicActivityCatalogProviderPort as f, type EducationTypes as g, type EducationTypesProviderPort as h, EducationTypesUseCase as i, GetCardDeliveryLocationCatalogUseCase as j, type GetCatalogFitCommand as k, GetCatalogFitUseCase as l, GetEconomicActivityCatalogUseCase as m, GetLaborPositionCatalogUseCase as n, GetOtherEconomicActivityCatalogUseCase as o, GetPurposeCatalogUseCase as p, type LaborPositionCatalogProviderPort as q, type MaritalStatusProviderPort as r, MaritalStatusUseCase as s, type PaymentServiceConceptsProviderPort as t, PaymentServiceConceptsUseCase as u, type ProfessionTypes as v, type ProfessionTypesProviderPort as w, ProfessionTypesUseCase as x, type PurposeCatalogItem as y, type PurposeCatalogProviderPort as z };

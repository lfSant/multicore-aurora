import { P as ProviderCallConfig } from './http-CRaj6wih.cjs';
import { P as ProviderResult, C as CanonicalResponse } from './types-DZJuEFLS.cjs';

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

export { type CatalogFitItem as C, type EconomicActivity as E, type GetCatalogFitCommand as G, type MaritalStatus as M, type PaymentServiceConcepts as P, type CatalogFitProviderPort as a, type EconomicActivityCatalogProviderPort as b, type EducationTypes as c, type EducationTypesProviderPort as d, EducationTypesUseCase as e, GetCatalogFitUseCase as f, GetEconomicActivityCatalogUseCase as g, type MaritalStatusProviderPort as h, MaritalStatusUseCase as i, type PaymentServiceConceptsProviderPort as j, PaymentServiceConceptsUseCase as k, type ProfessionTypes as l, type ProfessionTypesProviderPort as m, ProfessionTypesUseCase as n };

import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { m as MaritalStatusUseCase, M as MaritalStatus, e as EducationTypesUseCase, c as EducationTypes, r as ProfessionTypesUseCase, p as ProfessionTypes, o as PaymentServiceConceptsUseCase, P as PaymentServiceConcepts, G as GetCatalogFitCommand, C as CatalogFitItem, f as GetCatalogFitUseCase, g as GetEconomicActivityCatalogUseCase, E as EconomicActivity, i as GetOtherEconomicActivityCatalogUseCase, h as GetLaborPositionCatalogUseCase, L as LaborPosition, j as GetPurposeCatalogUseCase, s as PurposeCatalogItem } from '../../PaymentServiceConcepts.usecase-XIduuAJI.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.js';

declare function findMaritalStatusUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): MaritalStatusUseCase;
declare function getListMaritalStatus(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<MaritalStatus[]>>;

declare function findEducationTypesUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): EducationTypesUseCase;
declare function getListEducationTypes(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<EducationTypes[]>>;

declare function findProfessionalTypesUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ProfessionTypesUseCase;
declare function getListProfessionalTypes(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ProfessionTypes[]>>;

declare function findPaymentServiceConceptsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): PaymentServiceConceptsUseCase;
declare function getPaymentServiceConcepts(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<PaymentServiceConcepts[]>>;

declare function createCatalogFilterUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetCatalogFitUseCase;
declare function catalogFilter(command: GetCatalogFitCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<CatalogFitItem[]>>;

declare function createEconomicActivityCatalogUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetEconomicActivityCatalogUseCase;
declare function getEconomicActivityCatalog(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<EconomicActivity[]>>;

declare function createOtherEconomicActivityCatalogUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetOtherEconomicActivityCatalogUseCase;
declare function getOtherEconomicActivityCatalog(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<EconomicActivity[]>>;

declare function createLaborPositionCatalogUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetLaborPositionCatalogUseCase;
declare function getLaborPositionCatalog(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<LaborPosition[]>>;

declare function createPurposeCatalogUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetPurposeCatalogUseCase;
declare function getPurposeCatalog(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<PurposeCatalogItem[]>>;

export { catalogFilter, createCatalogFilterUseCase, createEconomicActivityCatalogUseCase, createLaborPositionCatalogUseCase, createOtherEconomicActivityCatalogUseCase, createPurposeCatalogUseCase, findEducationTypesUseCase, findMaritalStatusUseCase, findPaymentServiceConceptsUseCase, findProfessionalTypesUseCase, getEconomicActivityCatalog, getLaborPositionCatalog, getListEducationTypes, getListMaritalStatus, getListProfessionalTypes, getOtherEconomicActivityCatalog, getPaymentServiceConcepts, getPurposeCatalog };

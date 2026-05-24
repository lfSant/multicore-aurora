import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { j as MaritalStatusUseCase, M as MaritalStatus, e as EducationTypesUseCase, c as EducationTypes, o as ProfessionTypesUseCase, m as ProfessionTypes, l as PaymentServiceConceptsUseCase, P as PaymentServiceConcepts, G as GetCatalogFitCommand, C as CatalogFitItem, f as GetCatalogFitUseCase, g as GetEconomicActivityCatalogUseCase, E as EconomicActivity, h as GetOtherEconomicActivityCatalogUseCase } from '../../PaymentServiceConcepts.usecase-DBqlwP4d.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.cjs';

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

export { catalogFilter, createCatalogFilterUseCase, createEconomicActivityCatalogUseCase, createOtherEconomicActivityCatalogUseCase, findEducationTypesUseCase, findMaritalStatusUseCase, findPaymentServiceConceptsUseCase, findProfessionalTypesUseCase, getEconomicActivityCatalog, getListEducationTypes, getListMaritalStatus, getListProfessionalTypes, getOtherEconomicActivityCatalog, getPaymentServiceConcepts };

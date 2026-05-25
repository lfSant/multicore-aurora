import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { s as MaritalStatusUseCase, M as MaritalStatus, i as EducationTypesUseCase, g as EducationTypes, x as ProfessionTypesUseCase, v as ProfessionTypes, u as PaymentServiceConceptsUseCase, P as PaymentServiceConcepts, k as GetCatalogFitCommand, d as CatalogFitItem, l as GetCatalogFitUseCase, m as GetEconomicActivityCatalogUseCase, E as EconomicActivity, o as GetOtherEconomicActivityCatalogUseCase, n as GetLaborPositionCatalogUseCase, L as LaborPosition, p as GetPurposeCatalogUseCase, y as PurposeCatalogItem, j as GetCardDeliveryLocationCatalogUseCase, G as GetCardDeliveryLocationCatalogCommand, b as CardDeliveryLocation, A as SubmitCardDeliveryInfoUseCase, S as SubmitCardDeliveryInfoCommand, C as CardDeliveryInfoSubmission } from '../../PaymentServiceConcepts.usecase-B4QFUlQu.cjs';
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

declare function createCardDeliveryLocationCatalogUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetCardDeliveryLocationCatalogUseCase;
declare function getCardDeliveryLocationCatalog(command: GetCardDeliveryLocationCatalogCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<CardDeliveryLocation[]>>;

declare function createSubmitCardDeliveryInfoUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): SubmitCardDeliveryInfoUseCase;
declare function submitCardDeliveryInfo(command: SubmitCardDeliveryInfoCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<CardDeliveryInfoSubmission>>;

export { catalogFilter, createCardDeliveryLocationCatalogUseCase, createCatalogFilterUseCase, createEconomicActivityCatalogUseCase, createLaborPositionCatalogUseCase, createOtherEconomicActivityCatalogUseCase, createPurposeCatalogUseCase, createSubmitCardDeliveryInfoUseCase, findEducationTypesUseCase, findMaritalStatusUseCase, findPaymentServiceConceptsUseCase, findProfessionalTypesUseCase, getCardDeliveryLocationCatalog, getEconomicActivityCatalog, getLaborPositionCatalog, getListEducationTypes, getListMaritalStatus, getListProfessionalTypes, getOtherEconomicActivityCatalog, getPaymentServiceConcepts, getPurposeCatalog, submitCardDeliveryInfo };

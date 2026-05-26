import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { w as MaritalStatusUseCase, M as MaritalStatus, k as EducationTypesUseCase, i as EducationTypes, B as ProfessionTypesUseCase, z as ProfessionTypes, y as PaymentServiceConceptsUseCase, P as PaymentServiceConcepts, o as GetCatalogFitCommand, f as CatalogFitItem, p as GetCatalogFitUseCase, q as GetEconomicActivityCatalogUseCase, E as EconomicActivity, s as GetOtherEconomicActivityCatalogUseCase, r as GetLaborPositionCatalogUseCase, L as LaborPosition, t as GetPurposeCatalogUseCase, D as PurposeCatalogItem, l as GetCardDeliveryLocationCatalogUseCase, G as GetCardDeliveryLocationCatalogCommand, b as CardDeliveryLocation, H as SubmitCardDeliveryInfoUseCase, S as SubmitCardDeliveryInfoCommand, C as CardDeliveryInfoSubmission, n as GetCatalogCardNamesUseCase, m as GetCatalogCardNamesCommand, d as CardName } from '../../PaymentServiceConcepts.usecase-CLsueFss.js';
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

declare function createCatalogCardNamesUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetCatalogCardNamesUseCase;
declare function getCatalogCardNames(command: GetCatalogCardNamesCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<CardName[]>>;

export { catalogFilter, createCardDeliveryLocationCatalogUseCase, createCatalogCardNamesUseCase, createCatalogFilterUseCase, createEconomicActivityCatalogUseCase, createLaborPositionCatalogUseCase, createOtherEconomicActivityCatalogUseCase, createPurposeCatalogUseCase, createSubmitCardDeliveryInfoUseCase, findEducationTypesUseCase, findMaritalStatusUseCase, findPaymentServiceConceptsUseCase, findProfessionalTypesUseCase, getCardDeliveryLocationCatalog, getCatalogCardNames, getEconomicActivityCatalog, getLaborPositionCatalog, getListEducationTypes, getListMaritalStatus, getListProfessionalTypes, getOtherEconomicActivityCatalog, getPaymentServiceConcepts, getPurposeCatalog, submitCardDeliveryInfo };

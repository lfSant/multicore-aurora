import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { A as MaritalStatusUseCase, M as MaritalStatus, m as EducationTypesUseCase, k as EducationTypes, I as ProfessionTypesUseCase, F as ProfessionTypes, D as PaymentServiceConceptsUseCase, P as PaymentServiceConcepts, s as GetCatalogFitCommand, h as CatalogFitItem, t as GetCatalogFitUseCase, u as GetEconomicActivityCatalogUseCase, E as EconomicActivity, w as GetOtherEconomicActivityCatalogUseCase, v as GetLaborPositionCatalogUseCase, L as LaborPosition, x as GetPurposeCatalogUseCase, J as PurposeCatalogItem, p as GetCardDeliveryLocationCatalogUseCase, o as GetCardDeliveryLocationCatalogCommand, d as CardDeliveryLocation, N as SubmitCardDeliveryInfoUseCase, S as SubmitCardDeliveryInfoCommand, b as CardDeliveryInfoSubmission, r as GetCatalogCardNamesUseCase, q as GetCatalogCardNamesCommand, f as CardName, n as GetCardDeliveryInfoUseCase, G as GetCardDeliveryInfoCommand, C as CardDeliveryInfo } from '../../GetCardDeliveryInfo.usecase-BvkpXwX8.js';
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

declare function createGetCardDeliveryInfoUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetCardDeliveryInfoUseCase;
declare function getCardDeliveryInfo(command: GetCardDeliveryInfoCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<CardDeliveryInfo>>;

export { catalogFilter, createCardDeliveryLocationCatalogUseCase, createCatalogCardNamesUseCase, createCatalogFilterUseCase, createEconomicActivityCatalogUseCase, createGetCardDeliveryInfoUseCase, createLaborPositionCatalogUseCase, createOtherEconomicActivityCatalogUseCase, createPurposeCatalogUseCase, createSubmitCardDeliveryInfoUseCase, findEducationTypesUseCase, findMaritalStatusUseCase, findPaymentServiceConceptsUseCase, findProfessionalTypesUseCase, getCardDeliveryInfo, getCardDeliveryLocationCatalog, getCatalogCardNames, getEconomicActivityCatalog, getLaborPositionCatalog, getListEducationTypes, getListMaritalStatus, getListProfessionalTypes, getOtherEconomicActivityCatalog, getPaymentServiceConcepts, getPurposeCatalog, submitCardDeliveryInfo };

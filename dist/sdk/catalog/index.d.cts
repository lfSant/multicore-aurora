import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { V as MaritalStatusUseCase, T as MaritalStatus, q as EducationTypesUseCase, o as EducationTypes, a5 as ProfessionTypesUseCase, a3 as ProfessionTypes, $ as PaymentServiceConceptsUseCase, Z as PaymentServiceConcepts, y as GetCatalogFitCommand, h as CatalogFitItem, z as GetCatalogFitUseCase, A as GetEconomicActivityCatalogUseCase, E as EconomicActivity, L as GetOtherEconomicActivityCatalogUseCase, K as GetLaborPositionCatalogUseCase, R as LaborPosition, O as GetPurposeCatalogUseCase, a7 as PurposeCatalogItem, v as GetCardDeliveryLocationCatalogUseCase, u as GetCardDeliveryLocationCatalogCommand, d as CardDeliveryLocation, aa as SubmitCardDeliveryInfoUseCase, a9 as SubmitCardDeliveryInfoCommand, b as CardDeliveryInfoSubmission, x as GetCatalogCardNamesUseCase, w as GetCatalogCardNamesCommand, f as CardName, t as GetCardDeliveryInfoUseCase, G as GetCardDeliveryInfoCommand, C as CardDeliveryInfo, N as GetPersonCatalogsUseCase, M as GetPersonCatalogsCommand, a1 as PersonCatalogs, J as GetInstitutionCatalogsUseCase, I as GetInstitutionCatalogsCommand, P as InstitutionCatalogs, H as GetFinancialProductCatalogsUseCase, D as GetFinancialProductCatalogsCommand, r as FinancialProductCatalogs } from '../../GetCardDeliveryInfo.usecase-DJO6f-Xz.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.cjs';
import '../../CoreRequestContext-C5PImHcm.cjs';

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

declare function createGetPersonCatalogsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetPersonCatalogsUseCase;
declare function getPersonCatalogs(command: GetPersonCatalogsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<PersonCatalogs>>;

declare function createGetInstitutionCatalogsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetInstitutionCatalogsUseCase;
declare function getInstitutionCatalogs(command: GetInstitutionCatalogsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<InstitutionCatalogs>>;

declare function createGetFinancialProductCatalogsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetFinancialProductCatalogsUseCase;
declare function getFinancialProductCatalogs(command: GetFinancialProductCatalogsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<FinancialProductCatalogs>>;

export { catalogFilter, createCardDeliveryLocationCatalogUseCase, createCatalogCardNamesUseCase, createCatalogFilterUseCase, createEconomicActivityCatalogUseCase, createGetCardDeliveryInfoUseCase, createGetFinancialProductCatalogsUseCase, createGetInstitutionCatalogsUseCase, createGetPersonCatalogsUseCase, createLaborPositionCatalogUseCase, createOtherEconomicActivityCatalogUseCase, createPurposeCatalogUseCase, createSubmitCardDeliveryInfoUseCase, findEducationTypesUseCase, findMaritalStatusUseCase, findPaymentServiceConceptsUseCase, findProfessionalTypesUseCase, getCardDeliveryInfo, getCardDeliveryLocationCatalog, getCatalogCardNames, getEconomicActivityCatalog, getFinancialProductCatalogs, getInstitutionCatalogs, getLaborPositionCatalog, getListEducationTypes, getListMaritalStatus, getListProfessionalTypes, getOtherEconomicActivityCatalog, getPaymentServiceConcepts, getPersonCatalogs, getPurposeCatalog, submitCardDeliveryInfo };

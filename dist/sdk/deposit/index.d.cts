import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.cjs';
import { Q as GetConsolidatedTimeDepositsUseCase, P as GetConsolidatedTimeDepositsCommand, af as TimeDeposit, W as GetDepositMovementsUseCase, V as GetDepositMovementsCommand, q as DepositMovement, a3 as ListDpfProductsCatalogUseCase, G as DpfProductCatalog, C as CalculateDpfValuesCommand, y as DpfCalculation, d as CalculateDpfValuesUseCase, k as CreateDpfUseCase, i as CreateDpfCommand, E as DpfCreation, $ as GetDpfReceiptUseCase, _ as GetDpfReceiptCommand, I as DpfReceipt, a2 as GetSelfCertificationDataCommand, ad as SelfCertificationDataResult, ae as SelfCertificationDataUseCase, a7 as SaveSelfCertificationDataCommand, a9 as SaveSelfCertificationDataResult, aa as SaveSelfCertificationDataUseCase, X as GetDepositTypeCatalogUseCase, t as DepositTypeCatalogItem, Z as GetDepositTypePresumptiveRequirementsUseCase, Y as GetDepositTypePresumptiveRequirementsCommand, w as DepositTypePresumptiveRequirements, U as GetDepositCancellationTypesUseCase, T as GetDepositCancellationTypesCommand, n as DepositCancellationTypes, a1 as GetFixedTermDepositCurrentRatesUseCase, a0 as GetFixedTermDepositCurrentRatesCommand, L as FixedTermDepositCurrentRate, S as GetDepositAdditionalInformationUseCase, R as GetDepositAdditionalInformationCommand, D as DepositAdditionalInformation, ah as ValidateFixedTermDepositUseCase, ag as ValidateFixedTermDepositCommand, N as FixedTermDepositValidation } from '../../ValidateFixedTermDeposit.usecase-DL72are1.cjs';

declare function createConsolidatedTimeDepositsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetConsolidatedTimeDepositsUseCase;
declare function getConsolidatedTimeDeposits(command: GetConsolidatedTimeDepositsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<TimeDeposit[]>>;

declare function createDepositMovementsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetDepositMovementsUseCase;
declare function getDepositMovements(command: GetDepositMovementsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<DepositMovement[]>>;

declare function createListDpfProductsCatalogUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ListDpfProductsCatalogUseCase;
declare function listDpfProductsCatalog(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<DpfProductCatalog>>;

declare function createCalculateDpfValuesUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): CalculateDpfValuesUseCase;
declare function calculateDpfValues(command: CalculateDpfValuesCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<DpfCalculation>>;

declare function createCreateDpfUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): CreateDpfUseCase;
declare function createDpf(command: CreateDpfCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<DpfCreation>>;

declare function createGetDpfReceiptUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetDpfReceiptUseCase;
declare function getDpfReceipt(command: GetDpfReceiptCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<DpfReceipt>>;

declare function getSelfCertificationDataUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): SelfCertificationDataUseCase;
declare function getSelfCertificationData(command: GetSelfCertificationDataCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<SelfCertificationDataResult>>;

declare function saveSelfCertificationDataUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): SaveSelfCertificationDataUseCase;
declare function saveSelfCertificationData(command: SaveSelfCertificationDataCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<SaveSelfCertificationDataResult>>;

declare function createDepositTypeCatalogUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetDepositTypeCatalogUseCase;
declare function getDepositTypeCatalog(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<DepositTypeCatalogItem[]>>;

declare function createDepositTypePresumptiveRequirementsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetDepositTypePresumptiveRequirementsUseCase;
declare function getDepositTypePresumptiveRequirements(cmd: GetDepositTypePresumptiveRequirementsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<DepositTypePresumptiveRequirements>>;

declare function createDepositCancellationTypesUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetDepositCancellationTypesUseCase;
declare function getDepositCancellationTypes(cmd: GetDepositCancellationTypesCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<DepositCancellationTypes>>;

declare function createFixedTermDepositCurrentRatesUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetFixedTermDepositCurrentRatesUseCase;
declare function getFixedTermDepositCurrentRates(cmd: GetFixedTermDepositCurrentRatesCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<FixedTermDepositCurrentRate[]>>;

declare function createDepositAdditionalInformationUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetDepositAdditionalInformationUseCase;
declare function getDepositAdditionalInformation(cmd: GetDepositAdditionalInformationCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<DepositAdditionalInformation>>;

declare function createFixedTermDepositValidationUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ValidateFixedTermDepositUseCase;
declare function validateFixedTermDeposit(cmd: ValidateFixedTermDepositCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<FixedTermDepositValidation>>;

export { calculateDpfValues, createCalculateDpfValuesUseCase, createConsolidatedTimeDepositsUseCase, createCreateDpfUseCase, createDepositAdditionalInformationUseCase, createDepositCancellationTypesUseCase, createDepositMovementsUseCase, createDepositTypeCatalogUseCase, createDepositTypePresumptiveRequirementsUseCase, createDpf, createFixedTermDepositCurrentRatesUseCase, createFixedTermDepositValidationUseCase, createGetDpfReceiptUseCase, createListDpfProductsCatalogUseCase, getConsolidatedTimeDeposits, getDepositAdditionalInformation, getDepositCancellationTypes, getDepositMovements, getDepositTypeCatalog, getDepositTypePresumptiveRequirements, getDpfReceipt, getFixedTermDepositCurrentRates, getSelfCertificationData, getSelfCertificationDataUseCase, listDpfProductsCatalog, saveSelfCertificationData, saveSelfCertificationDataUseCase, validateFixedTermDeposit };

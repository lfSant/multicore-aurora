import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.cjs';
import { u as GetConsolidatedTimeDepositsUseCase, G as GetConsolidatedTimeDepositsCommand, T as TimeDeposit, w as GetDepositMovementsUseCase, v as GetDepositMovementsCommand, D as DepositMovement, L as ListDpfProductsCatalogUseCase, q as DpfProductCatalog, C as CalculateDpfValuesCommand, m as DpfCalculation, d as CalculateDpfValuesUseCase, k as CreateDpfUseCase, i as CreateDpfCommand, o as DpfCreation, y as GetDpfReceiptUseCase, x as GetDpfReceiptCommand, s as DpfReceipt, z as GetSelfCertificationDataCommand, N as SelfCertificationDataResult, O as SelfCertificationDataUseCase, S as SaveSelfCertificationDataCommand, I as SaveSelfCertificationDataResult, J as SaveSelfCertificationDataUseCase } from '../../SaveSelfCertificationData.usecase-Q8cuae8L.cjs';

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

export { calculateDpfValues, createCalculateDpfValuesUseCase, createConsolidatedTimeDepositsUseCase, createCreateDpfUseCase, createDepositMovementsUseCase, createDpf, createGetDpfReceiptUseCase, createListDpfProductsCatalogUseCase, getConsolidatedTimeDeposits, getDepositMovements, getDpfReceipt, getSelfCertificationData, getSelfCertificationDataUseCase, listDpfProductsCatalog, saveSelfCertificationData, saveSelfCertificationDataUseCase };

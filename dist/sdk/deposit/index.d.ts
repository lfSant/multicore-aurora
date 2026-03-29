import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-D11BfpWV.js';
import { o as GetConsolidatedTimeDepositsUseCase, G as GetConsolidatedTimeDepositsCommand, T as TimeDeposit, q as GetDepositMovementsUseCase, p as GetDepositMovementsCommand, D as DepositMovement, L as ListDpfProductsCatalogUseCase, k as DpfProductCatalog, C as CalculateDpfValuesCommand, g as DpfCalculation, a as CalculateDpfValuesUseCase, e as CreateDpfUseCase, c as CreateDpfCommand, i as DpfCreation, s as GetDpfReceiptUseCase, r as GetDpfReceiptCommand, m as DpfReceipt } from '../../GetDpfReceipt.usecase-1maCuD0o.js';

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

export { calculateDpfValues, createCalculateDpfValuesUseCase, createConsolidatedTimeDepositsUseCase, createCreateDpfUseCase, createDepositMovementsUseCase, createDpf, createGetDpfReceiptUseCase, createListDpfProductsCatalogUseCase, getConsolidatedTimeDeposits, getDepositMovements, getDpfReceipt, listDpfProductsCatalog };

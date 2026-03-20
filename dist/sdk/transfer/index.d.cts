import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { L as ListTransferInitialChargeProductsUseCase, T as TransferInitialChargeBuckets, I as InternalTransferCommand, e as InternalTransferResult, a as CreateInternalTransferUseCase, E as ExternalTransferCommand, c as ExternalTransferResult, C as CreateExternalTransferUseCase } from '../../CreateExternalTransfer.usecase-BmKEnIbl.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-D11BfpWV.cjs';

declare function getListTransferInitialChargeUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ListTransferInitialChargeProductsUseCase;
declare function listTransferInitialCharge(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<TransferInitialChargeBuckets>>;

declare function createInternalTransferUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): CreateInternalTransferUseCase;
declare function createInternalTransfer(command: InternalTransferCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<InternalTransferResult>>;

declare function createExternalTransferUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): CreateExternalTransferUseCase;
declare function createExternalTransfer(command: ExternalTransferCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ExternalTransferResult>>;

export { createExternalTransfer, createExternalTransferUseCase, createInternalTransfer, createInternalTransferUseCase, getListTransferInitialChargeUseCase, listTransferInitialCharge };

import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { L as ListTransferInitialChargeProductsUseCase, a as TransferInitialChargeBuckets, C as CreateInternalTransferUseCase, c as InternalTransferCommand, d as InternalTransferResult, h as CreateExternalTransferUseCase, E as ExternalTransferCommand, f as ExternalTransferResult } from '../../CreateExternalTransfer.usecase-DY0AZz6U.cjs';
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

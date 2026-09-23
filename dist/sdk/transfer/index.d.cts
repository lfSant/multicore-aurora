import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { L as ListTransferInitialChargeProductsUseCase, T as TransferInitialChargeBuckets, I as InternalTransferCommand, h as InternalTransferResult, d as CreateInternalTransferUseCase, E as ExternalTransferCommand, f as ExternalTransferResult, C as CreateExternalTransferUseCase, V as ValidateBeneficiaryCommand, b as BeneficiaryValidationResult, c as BeneficiaryValidationUseCase } from '../../BeneficiaryValidation.usecase-D5pbZsI4.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.cjs';

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

declare function validateBeneficiaryUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): BeneficiaryValidationUseCase;
declare function validateBeneficiary(command: ValidateBeneficiaryCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<BeneficiaryValidationResult>>;

export { createExternalTransfer, createExternalTransferUseCase, createInternalTransfer, createInternalTransferUseCase, getListTransferInitialChargeUseCase, listTransferInitialCharge, validateBeneficiary, validateBeneficiaryUseCase };

import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.js';
import { f as GetUserDataUseCase, d as GetUserDataCommand, k as UserDataResult, c as GetUserBeneficiariesUseCase, G as GetUserBeneficiariesCommand, i as UserBeneficiaryResult, g as UpdateContractStatusUseCase, U as UpdateContractStatusCommand, C as ContractStatusUpdate } from '../../GetUserBeneficiaries.usecase-8GehKDz1.js';

declare function createGetUserDataUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetUserDataUseCase;
declare function getUserData(command: GetUserDataCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<UserDataResult>>;

declare function createGetUserBeneficiariesUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetUserBeneficiariesUseCase;
declare function getUserBeneficiaries(command: GetUserBeneficiariesCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<UserBeneficiaryResult>>;

declare function createUpdateContractStatusUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): UpdateContractStatusUseCase;
declare function updateContractStatus(command: UpdateContractStatusCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ContractStatusUpdate>>;

export { createGetUserBeneficiariesUseCase, createGetUserDataUseCase, createUpdateContractStatusUseCase, getUserBeneficiaries, getUserData, updateContractStatus };

import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.cjs';
import { f as GetUserDataUseCase, d as GetUserDataCommand, k as UserDataResult, c as GetUserBeneficiariesUseCase, G as GetUserBeneficiariesCommand, i as UserBeneficiaryResult, g as UpdateContractStatusUseCase, U as UpdateContractStatusCommand, C as ContractStatusUpdate } from '../../GetUserBeneficiaries.usecase-Dr2b-vNf.cjs';

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

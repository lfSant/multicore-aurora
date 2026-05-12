import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.cjs';
import { e as GetUserDataUseCase, c as GetUserDataCommand, h as UserDataResult, b as GetUserBeneficiariesUseCase, G as GetUserBeneficiariesCommand, f as UserBeneficiaryResult } from '../../GetUserBeneficiaries.usecase-wUqnadtH.cjs';

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

export { createGetUserBeneficiariesUseCase, createGetUserDataUseCase, getUserBeneficiaries, getUserData };

import { A as AdapterFactoryOptions } from '../../factories-BT5sFmip.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-D11BfpWV.js';
import { b as GetUserDataUseCase, G as GetUserDataCommand, U as UserDataResult } from '../../GetUserData.usecase-DgpcGCAt.js';

declare function createGetUserDataUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetUserDataUseCase;
declare function getUserData(command: GetUserDataCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<UserDataResult>>;

export { createGetUserDataUseCase, getUserData };

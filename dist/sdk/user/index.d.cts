import { A as AdapterFactoryOptions } from '../../factories-BT5sFmip.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-D11BfpWV.cjs';
import { b as GetUserDataUseCase, G as GetUserDataCommand, U as UserDataResult } from '../../GetUserData.usecase-DskRAqPD.cjs';

declare function createGetUserDataUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetUserDataUseCase;
declare function getUserData(command: GetUserDataCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<UserDataResult>>;

export { createGetUserDataUseCase, getUserData };

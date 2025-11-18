import { A as AdapterFactoryOptions } from '../../factories-BT5sFmip.js';
import { c as AuthPrecheckUseCase, A as AuthPrecheckCommand, a as AuthPrecheckStatus, g as AuthLoginUseCase, d as AuthLoginCommand, e as AuthLogin } from '../../AuthLogin.usecase-BtQeC9Mz.js';
import { P as ProviderCallConfig, C as CanonicalResponse } from '../../http-BkU-WJ0-.js';

declare function createAuthPrecheckUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): AuthPrecheckUseCase;
declare function authPrecheck(command: AuthPrecheckCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<AuthPrecheckStatus>>;

declare function createAuthLoginUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): AuthLoginUseCase;
declare function authLogin(command: AuthLoginCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<AuthLogin>>;

export { authLogin, authPrecheck, createAuthLoginUseCase, createAuthPrecheckUseCase };

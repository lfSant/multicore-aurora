import { A as AdapterFactoryOptions } from '../../factories-BT5sFmip.js';
import { c as AuthPrecheckUseCase, A as AuthPrecheckCommand, a as AuthPrecheckStatus, g as AuthLoginUseCase, d as AuthLoginCommand, e as AuthLogin, j as LoginCoreUseCase, L as LoginCoreCommand, h as LoginCoreResult } from '../../LoginCore.usecase-DlRqwfin.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-D11BfpWV.js';

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

declare function createLoginCoreUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): LoginCoreUseCase;
declare function loginCore(command: LoginCoreCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<LoginCoreResult>>;

export { authLogin, authPrecheck, createAuthLoginUseCase, createAuthPrecheckUseCase, createLoginCoreUseCase, loginCore };

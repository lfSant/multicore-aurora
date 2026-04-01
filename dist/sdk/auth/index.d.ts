import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { d as AuthPrecheckCommand, f as AuthPrecheckStatus, g as AuthPrecheckUseCase, a as AuthLoginCommand, A as AuthLogin, c as AuthLoginUseCase, p as LoginCoreUseCase, L as LoginCoreCommand, o as LoginCoreResult, s as ResetPasswordUseCase, q as ResetPasswordCommand, R as ResetPassword, k as ChangePasswordCommand, C as ChangePassword, m as ChangePasswordUseCase, h as BlockUserCommand, B as BlockUser, j as BlockUserUseCase, v as UnblockUserUseCase, t as UnblockUserCommand, U as UnblockUser, y as ValidateUsernameUseCase, w as ValidateUsernameCommand, V as ValidateUsername } from '../../ValidateUsername.usecase-Dp2N--Z1.js';
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

declare function createResetPasswordUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ResetPasswordUseCase;
declare function resetPassword(command: ResetPasswordCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ResetPassword>>;

declare function createChangePasswordUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ChangePasswordUseCase;
declare function changePassword(command: ChangePasswordCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ChangePassword>>;

declare function createBlockUserUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): BlockUserUseCase;
declare function blockUser(command: BlockUserCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<BlockUser>>;

declare function createUnblockUserUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): UnblockUserUseCase;
declare function unblockUser(command: UnblockUserCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<UnblockUser>>;

declare function createValidateUsernameUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ValidateUsernameUseCase;
declare function validateUsername(command: ValidateUsernameCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ValidateUsername>>;

export { authLogin, authPrecheck, blockUser, changePassword, createAuthLoginUseCase, createAuthPrecheckUseCase, createBlockUserUseCase, createChangePasswordUseCase, createLoginCoreUseCase, createResetPasswordUseCase, createUnblockUserUseCase, createValidateUsernameUseCase, loginCore, resetPassword, unblockUser, validateUsername };

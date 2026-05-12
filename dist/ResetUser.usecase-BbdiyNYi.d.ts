import { P as ProviderCallConfig } from './http-CRaj6wih.js';
import { P as ProviderResult, C as CanonicalResponse } from './types-DZJuEFLS.js';

interface AuthPrecheckCommand {
    username: string;
    password: string;
    attributes?: Record<string, any>;
}

interface AuthPrecheckStatus {
    allowed: boolean;
    cookie?: string;
}

interface AuthPrecheckProviderPort {
    preCheck(cmd: AuthPrecheckCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<AuthPrecheckStatus>>;
}

declare class AuthPrecheckUseCase {
    private readonly provider;
    constructor(provider: AuthPrecheckProviderPort);
    execute(cmd: AuthPrecheckCommand, http: ProviderCallConfig): Promise<CanonicalResponse<AuthPrecheckStatus>>;
}

interface AuthLoginCommand {
    username: string;
    password: string;
    attributes?: Record<string, any>;
}

interface AuthLogin {
    authenticated: boolean;
    accessToken: string;
    createdAt: Date;
    expiresAt?: Date;
    refreshToken?: string;
    refreshExpiresAt?: Date;
    terminalIp?: string;
    attributes?: Record<string, any>;
    clientCode?: string;
}

interface AuthLoginProviderPort {
    login(cmd: AuthLoginCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<AuthLogin>>;
}

declare class AuthLoginUseCase {
    private readonly provider;
    constructor(provider: AuthLoginProviderPort);
    execute(cmd: AuthLoginCommand, http: ProviderCallConfig): Promise<CanonicalResponse<AuthLogin>>;
}

interface LoginCoreCommand {
    username: string;
    password: string;
}

interface LoginCoreResult {
    clientNumber: string;
    lastPasswordChangeDate?: string;
}

interface LoginCoreProviderPort {
    loginCore(cmd: LoginCoreCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<LoginCoreResult>>;
}

declare class LoginCoreUseCase {
    private readonly provider;
    constructor(provider: LoginCoreProviderPort);
    execute(cmd: LoginCoreCommand, http: ProviderCallConfig): Promise<CanonicalResponse<LoginCoreResult>>;
}

interface ResetPasswordCommand {
    clientNumber: string;
    newPassword: string;
}

interface ResetPassword {
    transactionStatus: boolean;
}

interface ResetPasswordProviderPort {
    resetPassword(cmd: ResetPasswordCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ResetPassword>>;
}

declare class ResetPasswordUseCase {
    private readonly provider;
    constructor(provider: ResetPasswordProviderPort);
    execute(cmd: ResetPasswordCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ResetPassword>>;
}

interface ChangePasswordCommand {
    clientNumber: string;
    currentPassword: string;
    newPassword: string;
}

interface ChangePassword {
    transactionStatus: boolean;
}

interface ChangePasswordProviderPort {
    changePassword(cmd: ChangePasswordCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ChangePassword>>;
}

declare class ChangePasswordUseCase {
    private readonly provider;
    constructor(provider: ChangePasswordProviderPort);
    execute(cmd: ChangePasswordCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ChangePassword>>;
}

interface BlockUserCommand {
    clientNumber: string;
}

interface BlockUser {
    transactionStatus: boolean;
}

interface BlockUserProviderPort {
    blockUser(cmd: BlockUserCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<BlockUser>>;
}

declare class BlockUserUseCase {
    private readonly provider;
    constructor(provider: BlockUserProviderPort);
    execute(cmd: BlockUserCommand, http: ProviderCallConfig): Promise<CanonicalResponse<BlockUser>>;
}

interface UnblockUserCommand {
    clientNumber: string;
}

interface UnblockUser {
    transactionStatus: boolean;
}

interface UnblockUserProviderPort {
    unblockUser(cmd: UnblockUserCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<UnblockUser>>;
}

declare class UnblockUserUseCase {
    private readonly provider;
    constructor(provider: UnblockUserProviderPort);
    execute(cmd: UnblockUserCommand, http: ProviderCallConfig): Promise<CanonicalResponse<UnblockUser>>;
}

interface ValidateUsernameCommand {
    clientIdentification: string;
    clientUsername: string;
}

interface ValidateUsername {
    transactionStatus: boolean;
}

interface ValidateUsernameProviderPort {
    validateUsername(cmd: ValidateUsernameCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ValidateUsername>>;
}

declare class ValidateUsernameUseCase {
    private readonly provider;
    constructor(provider: ValidateUsernameProviderPort);
    execute(cmd: ValidateUsernameCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ValidateUsername>>;
}

interface RegisterCredentialsCommand {
    clientNumber: string;
    clientUsername: string;
    clientPassword: string;
}

interface RegisterCredentials {
    transactionStatus: boolean;
}

interface RegisterCredentialsProviderPort {
    registerCredentials(cmd: RegisterCredentialsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<RegisterCredentials>>;
}

declare class RegisterCredentialsUseCase {
    private readonly provider;
    constructor(provider: RegisterCredentialsProviderPort);
    execute(cmd: RegisterCredentialsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<RegisterCredentials>>;
}

interface ResetUserCommand {
    clientNumber: string;
    newUsername: string;
    newPassword: string;
}

interface ResetUser {
    transactionStatus: boolean;
}

interface ResetUserProviderPort {
    resetUser(cmd: ResetUserCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ResetUser>>;
}

declare class ResetUserUseCase {
    private readonly provider;
    constructor(provider: ResetUserProviderPort);
    execute(cmd: ResetUserCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ResetUser>>;
}

export { type AuthLogin as A, type BlockUser as B, type ChangePassword as C, ResetUserUseCase as D, type UnblockUserCommand as E, type UnblockUserProviderPort as F, UnblockUserUseCase as G, type ValidateUsernameCommand as H, type ValidateUsernameProviderPort as I, ValidateUsernameUseCase as J, type LoginCoreCommand as L, type RegisterCredentials as R, type UnblockUser as U, type ValidateUsername as V, type AuthLoginCommand as a, type AuthLoginProviderPort as b, AuthLoginUseCase as c, type AuthPrecheckCommand as d, type AuthPrecheckProviderPort as e, type AuthPrecheckStatus as f, AuthPrecheckUseCase as g, type BlockUserCommand as h, type BlockUserProviderPort as i, BlockUserUseCase as j, type ChangePasswordCommand as k, type ChangePasswordProviderPort as l, ChangePasswordUseCase as m, type LoginCoreProviderPort as n, type LoginCoreResult as o, LoginCoreUseCase as p, type RegisterCredentialsCommand as q, type RegisterCredentialsProviderPort as r, RegisterCredentialsUseCase as s, type ResetPassword as t, type ResetPasswordCommand as u, type ResetPasswordProviderPort as v, ResetPasswordUseCase as w, type ResetUser as x, type ResetUserCommand as y, type ResetUserProviderPort as z };

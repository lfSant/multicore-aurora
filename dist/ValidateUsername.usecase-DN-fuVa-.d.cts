import { P as ProviderCallConfig } from './http-CRaj6wih.cjs';
import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.cjs';

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
    clientCode: string;
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
    clientCode: string;
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
    clientCode: string;
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
    clientCode: string;
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

export { type AuthLogin as A, type BlockUser as B, type ChangePassword as C, type LoginCoreCommand as L, type ResetPassword as R, type UnblockUser as U, type ValidateUsername as V, type AuthLoginCommand as a, type AuthLoginProviderPort as b, AuthLoginUseCase as c, type AuthPrecheckCommand as d, type AuthPrecheckProviderPort as e, type AuthPrecheckStatus as f, AuthPrecheckUseCase as g, type BlockUserCommand as h, type BlockUserProviderPort as i, BlockUserUseCase as j, type ChangePasswordCommand as k, type ChangePasswordProviderPort as l, ChangePasswordUseCase as m, type LoginCoreProviderPort as n, type LoginCoreResult as o, LoginCoreUseCase as p, type ResetPasswordCommand as q, type ResetPasswordProviderPort as r, ResetPasswordUseCase as s, type UnblockUserCommand as t, type UnblockUserProviderPort as u, UnblockUserUseCase as v, type ValidateUsernameCommand as w, type ValidateUsernameProviderPort as x, ValidateUsernameUseCase as y };

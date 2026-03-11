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

export { type AuthLogin as A, type LoginCoreCommand as L, type AuthLoginCommand as a, type AuthLoginProviderPort as b, AuthLoginUseCase as c, type AuthPrecheckCommand as d, type AuthPrecheckProviderPort as e, type AuthPrecheckStatus as f, AuthPrecheckUseCase as g, type LoginCoreProviderPort as h, type LoginCoreResult as i, LoginCoreUseCase as j };

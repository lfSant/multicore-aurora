import { P as ProviderCallConfig, a as ProviderResult, C as CanonicalResponse } from './http-BkU-WJ0-.js';

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

export { type AuthPrecheckCommand as A, type AuthPrecheckStatus as a, type AuthPrecheckProviderPort as b, AuthPrecheckUseCase as c, type AuthLoginCommand as d, type AuthLogin as e, type AuthLoginProviderPort as f, AuthLoginUseCase as g };

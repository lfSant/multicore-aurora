export interface AuthLogin {
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
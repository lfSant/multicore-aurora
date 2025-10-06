export interface AuthPrecheckCommand {
    username: string;
    password: string;
    attributes?: Record<string, any>;
}
export interface AuthLoginCommand {
    username: string;
    password: string;
    attributes?: Record<string, any>;
}
export interface LoginCommand {
  username: string;
  password: string;
  attributes?: Record<string, unknown>;
}

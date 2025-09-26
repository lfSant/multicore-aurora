export interface LoginResult {
  authenticated: boolean;
  login?: string | null;
  culture?: string | null;
  terminalIp?: string | null;
  context?: Record<string, unknown>;
}

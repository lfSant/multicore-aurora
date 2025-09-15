export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ProviderCallConfig {
  url: string;
  method?: HttpMethod;
  headers?: Record<string, string>;
  timeoutMs?: number;
}

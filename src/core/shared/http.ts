export interface ProviderCallConfig {
  url: string;
  method?: 'GET'|'POST'|'PUT'|'DELETE'|'PATCH';
  headers?: Record<string,string>;
  params?: Record<string, any>;
  timeoutMs?: number;
  data?: unknown;
}

export interface HttpResponse<T=any> {
  status: number;
  headers: Record<string, any>;
  data: T;
}

interface ProviderCallConfig {
    baseUrl?: string;
    url?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: Record<string, string>;
    params?: Record<string, any>;
    timeoutMs?: number;
    data?: unknown;
}
interface HttpResponse<T = any> {
    status: number;
    headers: Record<string, any>;
    data: T;
}

export type { HttpResponse as H, ProviderCallConfig as P };

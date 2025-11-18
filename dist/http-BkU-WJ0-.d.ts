interface ProviderResult<TItem = any> {
    items: TItem[];
    status: number;
    provider: string;
    raw?: {
        headersCore: any;
        dataCore: any;
    };
    aditionalData?: Record<string, any>;
}
interface CanonicalResponse<TItem = any> {
    success: boolean;
    code: string;
    messages: {
        client: string;
        server: string;
    };
    data: TItem[];
    timestamp: string;
    status: number;
    aditionalData: Record<string, any>;
    raw?: Array<{
        headersCore: any;
        dataCore: any;
    }>;
}

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

export type { CanonicalResponse as C, HttpResponse as H, ProviderCallConfig as P, ProviderResult as a };

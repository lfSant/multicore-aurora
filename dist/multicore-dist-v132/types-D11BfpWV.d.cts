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

export type { CanonicalResponse as C, ProviderResult as P };

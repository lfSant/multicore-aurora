interface CoreRawPayload {
    headersCore: any;
    dataCore: any;
    timeResponseMs?: number;
    timeResponseCoreMs?: number;
    urlRequest?: string;
    bodyRequest?: any;
    bodyRequestRaw?: any;
    bodyReceived?: any;
    headersRequest?: any;
    paramsRequest?: any;
    [key: string]: any;
}
interface ProviderResult<TItem = any> {
    items: TItem[];
    status: number;
    provider: string;
    raw?: CoreRawPayload;
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
    raw?: CoreRawPayload[];
}

export type { CanonicalResponse as C, ProviderResult as P, CoreRawPayload as a };

import { CanonicalRaw } from "./envelope";

export interface ProviderResult<T> {
    items: T[];
    status?: number;
    provider?: string;
    raw?: CanonicalRaw;
}

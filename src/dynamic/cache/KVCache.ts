export interface KVCache {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, val: T, ttlSec: number): Promise<void>;
  del(key: string): Promise<void>;
}

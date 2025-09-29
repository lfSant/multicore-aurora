import { KVCache } from "./KVCache";
import type { Redis } from "ioredis";

export class RedisKV implements KVCache {
  constructor(private readonly redis: Redis, private readonly ns = "mcore:map") {}
  key(k: string){ return `${this.ns}:${k}`; }
  async get<T>(k: string){ const s = await this.redis.get(this.key(k)); return s ? JSON.parse(s) as T : null; }
  async set<T>(k: string, v: T, ttlSec: number){ await this.redis.set(this.key(k), JSON.stringify(v), 'EX', ttlSec); }
  async del(k: string){ await this.redis.del(this.key(k)); }
}

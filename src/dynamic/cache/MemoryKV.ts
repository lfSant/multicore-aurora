import { KVCache } from "./KVCache";

export class MemoryKV implements KVCache {
  private map = new Map<string, { v:any; exp:number }>();
  async get<T>(k: string){ const e=this.map.get(k); if(!e) return null; if(Date.now()>e.exp){this.map.delete(k); return null;} return e.v as T; }
  async set<T>(k: string, v: T, ttlSec: number){ this.map.set(k, { v, exp: Date.now()+ttlSec*1000 }); }
  async del(k: string){ this.map.delete(k); }
}

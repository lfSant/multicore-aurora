import type { Pool } from "mysql2/promise";
import type { Redis } from "ioredis";

export type ProviderKey = 'dy-23' | 'dy-29' | 'dy-cc';

export interface InitOptions {
  mysqlPool?: Pool;
  redisClient?: Redis;
}

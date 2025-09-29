import type { Pool } from "mysql2/promise";
import type { Redis } from "ioredis";

let mysqlPoolRef: Pool | null = null;
let redisClientRef: Redis | null = null;

export function setMySqlPool(pool: Pool) { mysqlPoolRef = pool; }
export function getMySqlPool(): Pool {
  if (!mysqlPoolRef) throw new Error("MySQL pool no inicializado");
  return mysqlPoolRef;
}

export function setRedisClient(client: Redis) { redisClientRef = client; }
export function getRedisClient(): Redis {
  if (!redisClientRef) throw new Error("Redis client no inicializado");
  return redisClientRef;
}

export async function shutdown() {
  try { await mysqlPoolRef?.end(); } catch {}
  try { await redisClientRef?.quit(); } catch {}
  mysqlPoolRef = null; redisClientRef = null;
}

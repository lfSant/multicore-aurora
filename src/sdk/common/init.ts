// src/sdk/common/init.ts
import type { Pool } from "mysql2/promise";
import type { Redis } from "ioredis";

let mysqlPoolRef: Pool | null = null;
let redisClientRef: Redis | null = null;

export function hasMySqlPool(): boolean { return !!mysqlPoolRef; }
export function hasRedisClient(): boolean { return !!redisClientRef; }

export function setMySqlPool(pool: Pool) {
  if (mysqlPoolRef && mysqlPoolRef !== pool) {
    throw new Error("MySQL pool ya fue inicializado");
  }
  mysqlPoolRef = pool;
}
export function getMySqlPool(): Pool {
  if (!mysqlPoolRef) throw new Error("MySQL pool no inicializado");
  return mysqlPoolRef;
}

export function setRedisClient(client: Redis) {
  if (redisClientRef && redisClientRef !== client) {
    throw new Error("Redis client ya fue inicializado");
  }
  client.on("error", (err) => console.error("[multicore-connector] Redis error:", err));
  client.on("end", () => console.warn("[multicore-connector] Redis desconectado"));
  client.on("ready", () => console.info("[multicore-connector] Redis listo"));
  redisClientRef = client;
}
export function getRedisClient(): Redis {
  if (!redisClientRef) throw new Error("Redis client no inicializado");
  return redisClientRef;
}

export async function shutdown() {
  try { await mysqlPoolRef?.end(); } catch (e) { console.warn("MySQL end error:", e); }
  try { await redisClientRef?.quit(); } catch (e) { console.warn("Redis quit error:", e); }
  mysqlPoolRef = null;
  redisClientRef = null;
}

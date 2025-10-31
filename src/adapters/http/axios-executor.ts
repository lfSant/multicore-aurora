import axios from "axios";
import { ProviderCallConfig,  } from "../../core/shared/http";
import * as http from "node:http";
import * as https from "node:https";

const httpAgent = new http.Agent({
  keepAlive: true,
  keepAliveMsecs: 30000,
  maxSockets: 100,
  maxFreeSockets: 20,
  timeout: 60000,
  scheduling: 'lifo',
});

const httpsAgent = new https.Agent({
  keepAlive: true,
  keepAliveMsecs: 30000,
  maxSockets: 100,
  maxFreeSockets: 20,
  timeout: 60000,
  scheduling: 'lifo',
  rejectUnauthorized: process.env.NODE_ENV === 'production', 
});

export interface HttpExecutionResult {
  url?: string;
  method: string;
  params?: Record<string, any>;
  status: number;
  headers: Record<string, any>;
  data: any;
  timeResponseMs: number;
}

export async function executeHttp(cfg: ProviderCallConfig): Promise<HttpExecutionResult> {
  let timeStart = Date.now();
  const res = await axios.request({
    url: cfg.url,
    method: cfg.method ?? 'POST',
    headers: cfg.headers,
    params: cfg.params,
    timeout: cfg.timeoutMs ?? 8000,
    data: (cfg as any).data,
    validateStatus: () => true,
    httpAgent,
    httpsAgent,
    decompress: true,
    maxRedirects: 3,
    maxContentLength: 10 * 1024 * 1024,
  });
  let timeEnd = Date.now();
  
  return { 
    url: cfg.url,
    method: cfg.method ?? 'POST',
    status: res.status, 
    headers: res.headers as Record<string, any>, 
    data: res.data,
    params: cfg.params,
    timeResponseMs: timeEnd - timeStart
  };
}
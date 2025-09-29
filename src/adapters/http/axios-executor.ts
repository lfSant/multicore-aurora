import axios from "axios";
import { ProviderCallConfig,  } from "../../core/shared/http";

export interface HttpExecutionResult {
  url: string;
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
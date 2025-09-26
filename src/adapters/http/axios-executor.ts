import axios from "axios";
import { HttpMethod } from "../../core/shared/http";

export interface ExecRequest {
  url: string;
  method: HttpMethod;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
  timeoutMs?: number;
  data?: any;
}

export interface ExecResponse {
  status: number;
  headers: Record<string, unknown>;
  data: any;
}

export async function executeHttp(req: ExecRequest): Promise<ExecResponse> {
  const res = await axios.request({
    url: req.url,
    method: req.method,
    headers: req.headers,
    params: req.params as any,
    timeout: req.timeoutMs ?? 8000,
    data: req.data,
    validateStatus: () => true,
  }).catch(err => {
    console.error('executeHttp - error técnico en conexión:', err);
    // Error de red / timeout / axios interno
    return {
      status: err.response?.status ?? 503,
      headers: err.response?.headers ?? {},
      data: err.response?.data ?? { message: err.message, code: 'E-CONN' },
    };
  });

  return { status: res.status, headers: res.headers as any, data: res.data };
}

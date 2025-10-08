import { CanonicalResponse } from "./types";

export function successResponse<T>(
  items: T[],
  opts?: { client?: string; server?: string; status?: number; raw?: Array<{headersCore:any; dataCore:any}> }
): CanonicalResponse<T> {
  return {
    success: true,
    code: "SRV-S2000",
    messages: {
      client: opts?.client ?? "El servicio se ejecutó correctamente.",
      server: opts?.server ?? "Servicio ejecutado correctamente.",
    },
    data: items ?? [],
    timestamp: new Date().toISOString(),
    status: opts?.status ?? 200,
    aditionalData: {},
    ...(opts?.raw ? { raw: opts.raw } : {}),
  };
}

export function errorResponse<T=never>(
  clientMsg: string,
  serverMsg: string,
  status: number,
  raw?: Array<{headersCore:any; dataCore:any}>
): CanonicalResponse<T> {
  return {
    success: false,
    code: "SRV-S5000",
    messages: { client: clientMsg, server: serverMsg },
    data: [],
    timestamp: new Date().toISOString(),
    status,
    aditionalData: {},
    ...(raw ? { raw } : {}),
  };
}

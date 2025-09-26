export interface CanonicalMessages {
  client: string;
  server: string;
}

export interface CanonicalRaw {
  headersCore?: Record<string, unknown>;
  dataCore?: unknown;
  // opcional: requestCore?: { url: string; method: string; headers?: any; params?: any; body?: any }
}

export interface CanonicalResponse<TItem> {
  success: boolean;
  code: string; // SRV-S2000 ok / SRV-S5000 error (puedes sobreescribirlo)
  messages: CanonicalMessages;
  data: TItem[]; // siempre array
  timestamp: string;
  status: number; // 200 en ok; status del core en error
  aditionalData: Record<string, any>;
  raw?: CanonicalRaw[]; // <-- NUEVO
}

function now() { return new Date().toISOString(); }

export function successResponse<TItem>(
  data: TItem[],
  messages: Partial<CanonicalMessages> = {},
  opts?: { code?: string; status?: number; aditionalData?: Record<string, any>; raw?: CanonicalRaw[] }
): CanonicalResponse<TItem> {
  return {
    success: true,
    code: opts?.code ?? "SRV-S2000",
    messages: {
      client: messages.client ?? "Parámetros del usuario obtenidos correctamente",
      server: messages.server ?? "Operación completada correctamente.",
    },
    data: data ?? [],
    timestamp: now(),
    status: opts?.status ?? 200,
    aditionalData: opts?.aditionalData ?? {},
    raw: opts?.raw,
  };
}

export function errorResponse<TItem>(
  status: number,
  clientMsg = "Servicio temporalmente no disponible",
  serverMsg = "",
  opts?: { code?: string; aditionalData?: Record<string, any>; raw?: CanonicalRaw[] }
): CanonicalResponse<TItem> {
  return {
    success: false,
    code: opts?.code ?? "SRV-S5000",
    messages: { client: clientMsg, server: serverMsg },
    data: [],
    timestamp: now(),
    status,
    aditionalData: opts?.aditionalData ?? {},
    raw: opts?.raw,
  };
}

export interface CanonicalMessages {
  client: string; // mensaje para el cliente/UX
  server: string; // detalle técnico opcional
}

export interface CanonicalResponse<TItem> {
  success: boolean;
  code: string; // SRV-S200 para OK
  messages: CanonicalMessages;
  data: TItem[]; // SIEMPRE array; si nada, []
  timestamp: string; // ISO
  status: number; // 200 para OK
  aditionalData: Record<string, any>;
}

// Builder estándar de éxito
export function successResponse<TItem>(
  data: TItem[],
  messages: Partial<CanonicalMessages> = {}
): CanonicalResponse<TItem> {
  return {
    success: true,
    code: "SRV-S200",
    messages: {
      client: messages.client ?? "Servicio ejecutado correctamente",
      server: messages.server ?? ""
    },
    data: data ?? [],
    timestamp: new Date().toISOString(),
    status: 200,
    aditionalData: {}
  };
}

// Mapea status HTTP a código interno
function statusToCode(status?: number) {
  if (!status) return 'SRV-E500';
  if (status >= 400 && status < 500) return `SRV-E4${status}`;
  if (status >= 500) return `SRV-E5${status}`;
  return 'SRV-E500';
}

// Builder estándar de error
export function errorResponse<TItem>(
  status: number,
  clientMsg = "Servicio temporalmente no disponible",
  serverMsg = "",
  extra: Record<string, any> = {}
): CanonicalResponse<TItem> {
  return {
    success: false,
    code: statusToCode(status),
    messages: { client: clientMsg, server: serverMsg },
    data: [],
    timestamp: new Date().toISOString(),
    status,
    aditionalData: extra
  };
}

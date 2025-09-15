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
      client: messages.client ?? "Parametros del usuario obtenidos correctamente",
      server: messages.server ?? ""
    },
    data: data ?? [],
    timestamp: new Date().toISOString(),
    status: 200,
    aditionalData: {}
  };
}

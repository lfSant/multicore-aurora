export function mapDy23BusinessError(payload: any): {
  status: number;
  clientMsg: string;
  serverMsg: string;
  codeHint?: string;
} {
  // payload esperado: { messages: [{description|message}], ... }
  const msgArr = payload?.messages ?? [];
  const firstText = msgArr[0]?.description || msgArr[0]?.message || "Error de negocio";

  // ejemplos de mapeo simple por texto
  const text = (firstText || "").toLowerCase();
  if (text.includes("rol") && text.includes("horario")) {
    return {
      status: 403,
      clientMsg: "Operación no permitida por rol/horario",
      serverMsg: firstText,
      codeHint: "E-ROL-HORARIO",
    };
  }

  // default negocio
  return {
    status: 400,
    clientMsg: "Solicitud rechazada por el proveedor",
    serverMsg: firstText,
    codeHint: "E-NEGOCIO",
  };
}

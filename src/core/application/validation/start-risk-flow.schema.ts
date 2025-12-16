import { z } from "zod";

export const StartRiskFlowCommandSchema = z.object({
  providerAcronym: z.string().min(1, "providerAcronym es requerido"),
  channel: z.number().int().min(1, "channel debe ser 1 (IB) u 8 (MB)"),
  deviceIp: z.string().min(1, "deviceIp es requerido").regex(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/, {
    message: "deviceIp debe ser una IP válida",
  }),
  time: z.string().min(1, "time es requerido").regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "time debe tener formato YYYY-MM-DD",
  }),
  country: z.string().length(2, "country debe ser código de 2 letras (ej: EC)"),
  latitude: z.number(),
  longitude: z.number(),
  login: z.string().optional(),
  entity: z.number().int().optional(),
  observation: z.string().optional(),
  flowSsn: z.string().min(1, "flowSsn es requerido"),
});

export type StartRiskFlowCommandParsed = z.infer<typeof StartRiskFlowCommandSchema>;

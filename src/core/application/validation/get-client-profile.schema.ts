import { z } from "zod";

export const GetClientProfileCommandSchema = z.object({
  clientIdentification: z.string().min(1, "clientIdentification requerido"),
});

export type GetClientProfileCommandParsed = z.infer<typeof GetClientProfileCommandSchema>;

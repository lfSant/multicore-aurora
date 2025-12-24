import { z } from "zod";

export const GetUserDataCommandSchema = z.object({
  username: z.string().min(1, "El nombre de usuario es requerido"),
  channel: z.string().min(1, "El canal es requerido"),
});

export type GetUserDataCommandParsed = z.infer<typeof GetUserDataCommandSchema>;

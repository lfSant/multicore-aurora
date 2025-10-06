import { z } from "zod";

export const AuthLoginCommandSchema = z.object({
  username: z.string().min(1, "username requerido"),
  password: z.string().min(1, "password requerido"),
  attributes: z.record(z.any()).optional(),
});

export type AuthLoginCommandParsed = z.infer<typeof AuthLoginCommandSchema>;

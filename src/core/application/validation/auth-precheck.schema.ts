import { z } from "zod";

export const AuthPrecheckCommandSchema = z.object({
  username: z.string().min(1, "username requerido"),
  password: z.string().min(1, "password requerido"),
  atributes: z.record(z.any()).optional(),
});

export type AuthPrecheckCommandParsed = z.infer<typeof AuthPrecheckCommandSchema>;

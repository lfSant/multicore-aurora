import { z } from "zod";

export const LoginCommandSchema = z.object({
  username: z.string().min(1, 'username requerido'),
  password: z.string().min(1, 'password requerido'),
  attributes: z.record(z.unknown()).optional()
}).strict();

export type LoginCommand = z.infer<typeof LoginCommandSchema>;

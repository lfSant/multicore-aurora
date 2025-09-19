import { z } from "zod";

export const AuthCoreActiveCommandSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1)
}).strict();

export type AuthCoreActiveCommand = z.infer<typeof AuthCoreActiveCommandSchema>;

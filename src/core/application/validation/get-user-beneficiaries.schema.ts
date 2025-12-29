import { z } from "zod";

export const GetUserBeneficiariesCommandSchema = z.object({
  username: z.string().min(1, "El nombre de usuario es requerido"),
  channel: z.string().min(1, "El canal es requerido"),
});

export type GetUserBeneficiariesCommandParsed = z.infer<typeof GetUserBeneficiariesCommandSchema>;

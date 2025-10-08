import { z } from "zod";

export const GetAccountByNumberCommandSchema = z.object({
  numberAccount: z.string().min(1, "numberAccount es requerido"),
});

export type GetAccountByNumberCommandParsed = z.infer<typeof GetAccountByNumberCommandSchema>;

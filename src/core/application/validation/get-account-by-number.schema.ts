import { z } from "zod";

export const GetAccountByNumberCommandSchema = z.object({
  accountNumber: z.string().min(1, "accountNumber es requerido"),
});

export type GetAccountByNumberCommandParsed = z.infer<typeof GetAccountByNumberCommandSchema>;

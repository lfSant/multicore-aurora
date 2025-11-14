import { z } from "zod";

export const GetAccountByNumberCommandSchema = z.object({
  accountNumber: z.string().min(1, "accountNumber es requerido"),
  prodCod: z.string().min(1, "prodCod es requerido")
});

export type GetAccountByNumberCommandParsed = z.infer<typeof GetAccountByNumberCommandSchema>;

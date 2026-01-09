import { z } from "zod";

export const GetAccountByNumberCommandSchema = z.object({
  accountNumber: z.string().min(1, "accountNumber es requerido"),
  productCode: z.string().min(1, "productCode es requerido").optional()
});

export type GetAccountByNumberCommandParsed = z.infer<typeof GetAccountByNumberCommandSchema>;

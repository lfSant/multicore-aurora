import { z } from "zod";

export const GetConsolidatedAccountsCommandSchema = z.object({
  clientNumber: z.union([
    z.string().min(1, "El clientNumber es requerido"),
    z.number()
  ]),
});

export type GetConsolidatedAccountsCommandParsed = z.infer<typeof GetConsolidatedAccountsCommandSchema>;

import { z } from "zod";

export const GetAccountsForCausalsCommandSchema = z.object({
  identification: z.string().min(1, "Identificación es requerida"),
  documentTypeId: z.string().optional(),
  flowSsn: z.string().min(1, "SSN de flujo es requerido"),
});

export type GetAccountsForCausalsCommandParsed = z.infer<
  typeof GetAccountsForCausalsCommandSchema
>;

import { z } from "zod";

export const GetPaymentServiceQueryCommandSchema = z.object({
  referenceNumber: z.string().min(1, "referenceNumber es requerido"),
  identifier: z.string().min(1, "identifier es requerido"),
  clientNumber: z.number().int().positive("clientNumber debe ser un número positivo"),
});

export type GetPaymentServiceQueryCommandParsed = z.infer<typeof GetPaymentServiceQueryCommandSchema>;

import { z } from "zod";

export const ProcessPaymentServiceCommandSchema = z.object({
  accountNumber: z.string().min(1, "accountNumber es requerido"),
  identifier: z.string().min(1, "identifier es requerido"),
  referenceNumber: z.string().min(1, "referenceNumber es requerido"),
  transactionId: z.string().min(1, "transactionId es requerido"),
  itemId: z.string().min(1, "itemId es requerido"),
  amountToPay: z.number().positive("amountToPay debe ser un número positivo"),
  concept: z.string().min(1, "concept es requerido"),
});

export type ProcessPaymentServiceCommandParsed = z.infer<typeof ProcessPaymentServiceCommandSchema>;

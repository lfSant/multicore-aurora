import { z } from "zod";

export const ProcessPaymentReversalCommandSchema = z.object({
  accountNumber: z.string().min(1, "accountNumber es requerido"),
  referenceNumber: z.string().min(1, "referenceNumber es requerido"),
  sequential: z.number().positive("sequential debe ser un número positivo"),
  amount: z.number().positive("amount debe ser un número positivo"),
  concept: z.string().min(1, "concept es requerido"),
});

export type ProcessPaymentReversalCommandParsed = z.infer<typeof ProcessPaymentReversalCommandSchema>;

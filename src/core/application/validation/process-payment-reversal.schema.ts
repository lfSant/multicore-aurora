import { z } from "zod";

export const ProcessPaymentReversalCommandSchema = z.object({
  accountNumber: z.string().min(1, "accountNumber es requerido"),
  referenceNumber: z.string().min(1, "referenceNumber es requerido"),
  sequential: z.number().positive("sequential debe ser un número positivo"),
  amount: z.string().min(1, "amount es requerido").refine(
    (val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0,
    { message: "amount debe ser un número positivo en formato string" }
  ).refine(
    (val) => {
      const decimalPart = val.split('.')[1];
      return !decimalPart || decimalPart.length <= 2;
    },
    { message: "amount debe tener máximo 2 decimales" }
  ),
  concept: z.string().min(1, "concept es requerido"),
});

export type ProcessPaymentReversalCommandParsed = z.infer<typeof ProcessPaymentReversalCommandSchema>;

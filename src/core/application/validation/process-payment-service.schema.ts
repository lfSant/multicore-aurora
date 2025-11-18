import { z } from "zod";

export const ProcessPaymentServiceCommandSchema = z.object({
  accountNumber: z.string().min(1, "accountNumber es requerido"),
  identifier: z.string().min(1, "identifier es requerido"),
  referenceNumber: z.string().min(1, "referenceNumber es requerido"),
  transactionId: z.string().min(1, "transactionId es requerido"),
  itemId: z.string().min(1, "itemId es requerido"),
  amountToPay: z.string().min(1, "amountToPay es requerido").refine(
    (val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0,
    { message: "amountToPay debe ser un número positivo en formato string" }
  ).refine(
    (val) => {
      const decimalPart = val.split('.')[1];
      return !decimalPart || decimalPart.length <= 2;
    },
    { message: "amountToPay debe tener máximo 2 decimales" }
  ),
  concept: z.string().min(1, "concept es requerido"),
});

export type ProcessPaymentServiceCommandParsed = z.infer<typeof ProcessPaymentServiceCommandSchema>;

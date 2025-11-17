import { z } from "zod";

export const GetPaymentReversalsCommandSchema = z.object({
  accountNumber: z.string().min(1, "accountNumber es requerido"),
});

export type GetPaymentReversalsCommandParsed = z.infer<typeof GetPaymentReversalsCommandSchema>;

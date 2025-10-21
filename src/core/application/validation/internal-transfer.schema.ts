import { z } from "zod";

export const InternalTransferCommandSchema = z.object({
  accountNumberOrigin: z.string().min(1, "accountNumberOrigin es requerido"),
  destinationAccountNumber: z.string().min(1, "destinationAccountNumber es requerido"),
  amount: z.string().min(1, "amount es requerido").regex(/^\d+\.\d{2}$/, {
    message: "amount debe tener el formato correcto con 2 decimales",
  }),
  concept: z.string().min(1, "concept es requerido"),
});

export type InternalTransferCommandParsed = z.infer<typeof InternalTransferCommandSchema>;

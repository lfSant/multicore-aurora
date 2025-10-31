import { z } from "zod";

export const GetAccountSignersCommandSchema = z.object({
  accountNumber: z.string().min(1, "Número de cuenta es requerido"),
});

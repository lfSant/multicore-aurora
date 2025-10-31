import { z } from "zod";

export const GetLoanAdditionalInfoSchema = z.object({
  loanSequential: z.number().int().positive({
    message: "loanSequential debe ser un número entero positivo"
  })
});

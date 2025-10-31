import { z } from "zod";

export const GetLoanAmortizationTableSchema = z.object({
  loanSequential: z.number().int().positive({
    message: "loanSequential debe ser un número entero positivo"
  }),
  companySequential: z.number().int().positive({
    message: "companySequential debe ser un número entero positivo"
  }).optional()
});

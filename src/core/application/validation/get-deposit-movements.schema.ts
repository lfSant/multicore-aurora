import { z } from "zod";

export const GetDepositMovementsSchema = z.object({
  depositSequential: z.number().int().positive({
    message: "depositSequential debe ser un número entero positivo"
  }),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "startDate debe tener el formato YYYY-MM-DD"
  }),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "endDate debe tener el formato YYYY-MM-DD"
  }),
  companySequential: z.number().int().positive({
    message: "companySequential debe ser un número entero positivo"
  }).optional()
});

import { z } from "zod";

export const GetConsolidatedTimeDepositsSchema = z.object({
  clientNumber: z.number().int().positive({
    message: "clientNumber debe ser un número entero positivo"
  }),
  companySequential: z.number().int().positive({
    message: "companySequential debe ser un número entero positivo"
  }).optional(),
  isActive: z.boolean().optional()
});

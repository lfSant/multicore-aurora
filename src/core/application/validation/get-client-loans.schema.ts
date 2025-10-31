import { z } from 'zod';

export const GetClientLoansCommandSchema = z.object({
  clientNumber: z.number().int().positive('El número de cliente debe ser mayor a cero'),
  companySequential: z.number().int().optional(),
  isActive: z.boolean().optional(),
});

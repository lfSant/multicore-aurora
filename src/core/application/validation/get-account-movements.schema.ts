import { z } from "zod";

export const GetAccountMovementsCommandSchema = z.object({
  accountNumber: z.string().min(1, "El numero de cuenta es obligatorio"),
  prodCod: z.string().min(1, "El numero de prducto es obligatorio"),
  startDate: z.string()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, "La fecha de inicio debe tener el formato DD/MM/YYYY o MM/DD/YYYY"),
  endDate: z.string()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, "La fecha de fin debe tener el formato DD/MM/YYYY o MM/DD/YYYY"),
});

export type GetAccountMovementsCommandParsed = z.infer<typeof GetAccountMovementsCommandSchema>;

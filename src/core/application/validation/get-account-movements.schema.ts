import { z } from "zod";

export const GetAccountMovementsCommandSchema = z.object({
  accountNumber: z.string().min(1, "El numero de cuenta es obligatorio"),
  productCode: z.string().min(1, "El numero de prducto es obligatorio"),
  //ESTE FORMATO DEBE PERMANECER ASI PARA LA MUTUALISTA
  FechaInicial: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe tener el formato YYYY-MM-DD"),
  FechaFinal: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe tener el formato YYYY-MM-DD"),
});

export type GetAccountMovementsCommandParsed = z.infer<typeof GetAccountMovementsCommandSchema>;

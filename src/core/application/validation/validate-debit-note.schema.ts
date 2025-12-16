import { z } from "zod";

export const ValidateDebitNoteCommandSchema = z.object({
  identification: z.string().min(1, "Identificación es requerida"),
  accountNumber: z.string().min(1, "Número de cuenta es requerido"),
  amount: z.string().min(1, "Monto es requerido").refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, "Monto debe ser mayor a 0"),
  causal: z.string().min(1, "Causal es requerido"),
  observation: z.string().min(1, "Observación es requerida"),
  flowSsn: z.string().min(1, "SSN de flujo es requerido"),
});

export type ValidateDebitNoteCommandParsed = z.infer<
  typeof ValidateDebitNoteCommandSchema
>;

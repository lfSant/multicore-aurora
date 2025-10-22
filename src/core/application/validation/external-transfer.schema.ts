import { z } from "zod";

export const ExternalTransferCommandSchema = z.object({
  accountNumberOrigin: z.string().min(1, "accountNumberOrigin es requerido"),
  destinationAccountNumber: z.string().min(1, "destinationAccountNumber es requerido"),
  amount: z.string().min(1, "amount es requerido").regex(/^\d+\.(\d{1,2})?$/, {
    message: "amount debe tener el formato correcto con hasta 2 decimales",
  }),
  destinationIdentification: z.string().min(1, "destinationIdentification es requerido"),
  destinationName: z.string().min(1, "destinationName es requerido"),
  institutionSequential: z.string().min(1, "institutionSequential es requerido"),
  accountTypeCode: z.string().min(1, "accountTypeCode es requerido"),
  concept: z.string().min(1, "concept es requerido"),
});

export type ExternalTransferCommandParsed = z.infer<typeof ExternalTransferCommandSchema>;

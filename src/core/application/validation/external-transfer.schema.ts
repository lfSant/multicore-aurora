import { z } from "zod";

export const ExternalTransferCommandSchema = z.object({
  accountNumberOrigin: z.union([
    z.string().min(1, "accountNumberOrigin es requerido"),
    z.number()
  ]),
  destinationAccountNumber: z.union([
    z.string().min(1, "destinationAccountNumber es requerido"),
    z.number()
  ]),
  amount: z.union([
    z.string().min(1, "amount es requerido").regex(/^\d+\.\d{2}$/, {
      message: "amount debe tener el formato correcto con 2 decimales",
    }),
    z.number()
  ]),
  destinationIdentification: z.string().min(1, "destinationIdentification es requerido"),
  originIdentification: z.string().min(1, "destinationIdentification es requerido"),
  destinationName: z.string().min(1, "destinationName es requerido"),
  institutionSequential: z.string().min(1, "institutionSequential es requerido"),
  accountTypeCode: z.string().min(1, "accountTypeCode es requerido"),
  concept: z.string().min(1, "concept es requerido"),
  transferPlatform: z.string().min(1, "transferPlatform es requerido").optional(),
  trasnferDate: z.string()
    .min(1, "trasnferDate es requerido")
    .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, {
      message: "trasnferDate debe tener el formato YYYY-MM-DD HH:MM:SS"
    })
    .refine((dateStr) => {
      const date = new Date(dateStr);
      return !isNaN(date.getTime());
    }, {
      message: "trasnferDate debe ser una fecha y hora válida"
    })
    .optional(),
  transferDevice: z.string().min(1, "transferDevice es requerido").optional(),
  transferCodeReference: z.string().min(1, "transferCodeReference es requerido").optional(),
});

export type ExternalTransferCommandParsed = z.infer<typeof ExternalTransferCommandSchema>;

import { z } from "zod";

export const InternalTransferCommandSchema = z.object({
  accountNumberOrigin: z.string().min(1, "accountNumberOrigin es requerido"),
  destinationAccountNumber: z.string().min(1, "destinationAccountNumber es requerido"),
  amount: z.string().min(1, "amount es requerido").regex(/^\d+\.\d{2}$/, {
    message: "amount debe tener el formato correcto con 2 decimales",
  }),
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
  subType: z.string().min(1, "subType es requerido").optional(),
});

export type InternalTransferCommandParsed = z.infer<typeof InternalTransferCommandSchema>;
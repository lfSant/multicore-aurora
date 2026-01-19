import { z } from "zod";

export const InternalTransferCommandSchema = z.object({
  accountNumberOrigin: z.string().min(1, "accountNumberOrigin es requerido"),
  destinationAccountNumber: z.string().min(1, "destinationAccountNumber es requerido"),
  amount: z.string().min(1, "amount es requerido").regex(/^\d+\.\d{2}$/, {
    message: "amount debe tener el formato correcto con 2 decimales",
  }),
  concept: z.string().min(1, "concept es requerido"),
  platform: z.string().min(1, "platform es requerido").optional(),
  date: z.string()
    .min(1, "date es requerido")
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
  device: z.string().min(1, "device es requerido").optional(),
  codeReference: z.string().min(1, "codeReference es requerido").optional(),
  subType: z.string().min(1, "subType es requerido").optional(),
});

export type InternalTransferCommandParsed = z.infer<typeof InternalTransferCommandSchema>;
import { z } from "zod";

export const SendSmsByIdentificationCommandSchema = z.object({
  clientIdentification: z.string().min(1, "clientIdentification requerido"),
  message: z
    .string()
    .min(1, "message requerido")
    .regex(
      /^[a-zA-Z0-9\s.,;:!?()\-_"'+=*/@#$%&]+$/,
      "El mensaje contiene caracteres no permitidos. Use solo letras sin tildes, números y signos básicos"
    ),
});

export type SendSmsByIdentificationCommandParsed = z.infer<typeof SendSmsByIdentificationCommandSchema>;

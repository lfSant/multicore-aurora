import { z } from "zod";

export const SendSmsByPhoneCommandSchema = z.object({
    phoneNumber: z.string().min(1, "phoneNumber requerido"),
    message: z
        .string()
        .min(1, "message requerido")
        .regex(
            /^[a-zA-Z0-9\s.,;:!?()\-_"'+=*/@#$%&]+$/,
            "El mensaje contiene caracteres no permitidos. Use solo letras sin tildes, números y signos básicos"
        ),
});

export type SendSmsByPhoneCommandParsed = z.infer<typeof SendSmsByPhoneCommandSchema>;

import { z } from "zod";

export const CheckClientActiveCommandSchema = z.object({
    clientIdentification: z.string().min(1)
});
import { z } from "zod";

export const ListAccountsCommandSchema = z.object({
  clientIdentification: z.string().min(1, "clientIdentification es requerido"),
});

export type ListAccountsCommandParsed = z.infer<typeof ListAccountsCommandSchema>;

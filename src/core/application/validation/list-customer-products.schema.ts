import { z } from "zod";

export const ListCustomerProductsCommandSchema = z.object({
  clientNumber: z.union([
    z.string().min(1, "El clientNumber es requerido"),
    z.number()
  ]),
});

export type ListCustomerProductsCommandParsed = z.infer<typeof ListCustomerProductsCommandSchema>;

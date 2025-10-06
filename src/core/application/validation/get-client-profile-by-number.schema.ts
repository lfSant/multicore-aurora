import { z } from "zod";

export const GetClientProfileByNumberCommandSchema = z.object({
  clientNumber: z.number().int().positive(),
});

export type GetClientProfileByNumberCommandParsed = z.infer<typeof GetClientProfileByNumberCommandSchema>;

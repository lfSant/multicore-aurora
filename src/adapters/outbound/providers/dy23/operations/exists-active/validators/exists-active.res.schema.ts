import { z } from "zod";

// Aceptamos varias formas comunes: {activo}, {data: {activo}}, {isActive}
export const Dy23ExistsActiveResponseSchema = z.union([
  z.object({ activo: z.boolean() }),
  z.object({ data: z.object({ activo: z.boolean() }) }),
  z.object({ existeActivo: z.boolean() })
]);

export type Dy23ExistsActiveResponseParsed = z.infer<typeof Dy23ExistsActiveResponseSchema>;

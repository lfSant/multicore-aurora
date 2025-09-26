import { z } from "zod";

// ÉXITO (ejemplo que enviaste)
export const Dy23AuthLoginSuccessSchema = z.object({
  messages: z.array(z.unknown()).optional(),
  success: z.literal(true),
  data: z.unknown().optional(),
  clientContext: z.object({
    _culture: z.string().optional(),
    _login: z.string().optional(),
    _terminalIp: z.string().optional(),
  }).partial().optional(),
});

// ERROR DE NEGOCIO (success:false)
export const Dy23AuthLoginBusinessErrorSchema = z.object({
  messages: z.array(z.object({
    code: z.string().optional(),
    description: z.string().optional(),
    type: z.string().optional(),
    message: z.string().optional(),
  })).default([]),
  success: z.literal(false),
  nextStep: z.string().optional(),
  clientContext: z.object({
    _login: z.string().optional()
  }).partial().optional()
});

// La respuesta puede ser éxito o error de negocio (ambos con HTTP 2xx)
export const Dy23AuthLoginResponseSchema = z.union([
  Dy23AuthLoginSuccessSchema,
  Dy23AuthLoginBusinessErrorSchema
]);

export type Dy23AuthLoginResponseParsed = z.infer<typeof Dy23AuthLoginResponseSchema>;

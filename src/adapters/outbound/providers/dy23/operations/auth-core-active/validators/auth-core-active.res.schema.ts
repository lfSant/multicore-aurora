import { z } from "zod";

const PropReturnSchema = z.object({
  name: z.string(),
  value: z.union([z.boolean(), z.literal('true'), z.literal('false')]).transform(v => v === true || v === 'true')
});

export const Dy23AuthCoreActiveResponseSchema = z.object({
  messages: z.array(z.unknown()).optional(),
  success: z.boolean().optional(),
  data: z.object({
    sucess: z.boolean().optional(),
    success: z.boolean().optional(),
    status: z.boolean().optional(),
    responseData: z.object({
      className: z.string().optional(),
      properties: z.object({
        return: PropReturnSchema
      }).optional()
    }).optional()
  })
});

export type Dy23AuthCoreActiveResponseParsed = z.infer<typeof Dy23AuthCoreActiveResponseSchema>;

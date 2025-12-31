import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const TwoFactorMethodSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().optional().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TTwoFactorMethod = z.infer<typeof TwoFactorMethodSchema>;

export const CreateTwoFactorMethodRequestSchema = z.object({
  code: z.string().min(1).max(100),
  label: z.string().min(1).max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().default(true),
});
export type TCreateTwoFactorMethodRequest = z.infer<
  typeof CreateTwoFactorMethodRequestSchema
>;

export const UpdateTwoFactorMethodRequestSchema =
  CreateTwoFactorMethodRequestSchema.partial();
export type TUpdateTwoFactorMethodRequest = z.infer<
  typeof UpdateTwoFactorMethodRequestSchema
>;

import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const CakeTypeSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  description: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TCakeType = z.infer<typeof CakeTypeSchema>;

export const CreateCakeTypeRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  description: z.string().optional().nullable(),
  is_active: z.boolean().default(true),
});
export type TCreateCakeTypeRequest = z.infer<
  typeof CreateCakeTypeRequestSchema
>;

export const UpdateCakeTypeRequestSchema =
  CreateCakeTypeRequestSchema.partial();
export type TUpdateCakeTypeRequest = z.infer<
  typeof UpdateCakeTypeRequestSchema
>;

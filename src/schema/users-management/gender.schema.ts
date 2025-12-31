import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const GenderSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TGender = z.infer<typeof GenderSchema>;

export const CreateGenderRequestSchema = z.object({
  code: z.string().min(1).max(100),
  label: z.string().min(1).max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().default(true),
});
export type TCreateGenderRequest = z.infer<typeof CreateGenderRequestSchema>;

export const UpdateGenderRequestSchema = CreateGenderRequestSchema.partial();
export type TUpdateGenderRequest = z.infer<typeof UpdateGenderRequestSchema>;

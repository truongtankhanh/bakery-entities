import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const CakeTypeSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  description: z.string().nullable(),
});
export type TCakeType = z.infer<typeof CakeTypeSchema>;

export const CreateCakeTypeRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  description: z.string().optional().nullable(),
});
export type TCreateCakeTypeRequest = z.infer<
  typeof CreateCakeTypeRequestSchema
>;

export const UpdateCakeTypeRequestSchema =
  CreateCakeTypeRequestSchema.partial();
export type TUpdateCakeTypeRequest = z.infer<
  typeof UpdateCakeTypeRequestSchema
>;

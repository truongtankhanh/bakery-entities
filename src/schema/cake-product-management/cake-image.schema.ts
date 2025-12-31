import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const CakeImageSchema = EntityMetaSchema.extend({
  cake_id: z.number(),
  image_url: z.string(),
  caption: z.string().nullable(),
  is_primary: NumberToBooleanSchema,
  sort_order: z.number(),
});
export type TCakeImage = z.infer<typeof CakeImageSchema>;

export const CreateCakeImageRequestSchema = z.object({
  cake_id: z.number().int().positive(),
  image_url: z.string().max(500),
  caption: z.string().max(255).optional().nullable(),
  is_primary: z.boolean().default(false),
  sort_order: z.number().int().positive().optional(),
});
export type TCreateCakeImageRequest = z.infer<
  typeof CreateCakeImageRequestSchema
>;

export const UpdateCakeImageRequestSchema =
  CreateCakeImageRequestSchema.partial();
export type TUpdateCakeImageRequest = z.infer<
  typeof UpdateCakeImageRequestSchema
>;

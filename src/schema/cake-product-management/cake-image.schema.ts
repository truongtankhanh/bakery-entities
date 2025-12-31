import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const CakeImageSchema = EntityMetaSchema.extend({
  cake_id: z.number(),
  image_url: z.string(),
  caption: z.string().nullable(),
  is_primary: z.boolean(),
  sort_order: z.number(),
});
export type TCakeImage = z.infer<typeof CakeImageSchema>;

export const CreateCakeImageRequestSchema = z.object({
  cake_id: z.number().int().positive(),
  image_url: z.string().max(500),
  caption: z.string().max(255).optional().nullable(),
  is_primary: z.boolean().optional(),
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

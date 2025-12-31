import {z} from 'zod';

import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const StoreImageSchema = EntityMetaSchema.extend({
  store_id: z.number().int().nonnegative(),
  image_url: z.string().max(500),
  caption: z.string().max(255).nullable(),
  image_type: z.string().max(50).nullable(),
  is_featured: NumberToBooleanSchema,
  display_order: z.number().int().nonnegative(),
});
export type TStoreImage = z.infer<typeof StoreImageSchema>;

export const CreateStoreImageRequestSchema = z.object({
  store_id: z.number().int().nonnegative(),
  image_url: z.string().max(500),
  caption: z.string().max(255).nullable().optional(),
  image_type: z.string().max(50).nullable().optional(),
  is_featured: z.boolean().optional().default(false),
  display_order: z.number().int().nonnegative().optional(),
});
export type TCreateStoreImageRequest = z.infer<
  typeof CreateStoreImageRequestSchema
>;

export const UpdateStoreImageRequestSchema =
  CreateStoreImageRequestSchema.partial();
export type TUpdateStoreImageRequest = z.infer<
  typeof UpdateStoreImageRequestSchema
>;

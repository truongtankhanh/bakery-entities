import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const CakeSchema = EntityMetaSchema.extend({
  name: z.string(),
  description: z.string().nullable(),
  type_id: z.number(),
  category_id: z.number().nullable(),
  price: z.number(),
  thumbnail_url: z.string().nullable(),
  stock_quantity: z.number(),
  rating: z.number(),
  review_count: z.number(),
  is_active: z.boolean(),
  is_featured: z.boolean(),
});
export type TCake = z.infer<typeof CakeSchema>;

export const CreateCakeRequestSchema = z.object({
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  type_id: z.number().int().positive(),
  category_id: z.number().int().positive().optional().nullable(),
  price: z.number(),
  thumbnail_url: z.string().max(500).optional().nullable(),
  stock_quantity: z.number().optional(),
  rating: z.number().optional(),
  review_count: z.number().optional(),
  is_active: z.boolean().optional(),
  is_featured: z.boolean().optional(),
});
export type TCreateCakeRequest = z.infer<typeof CreateCakeRequestSchema>;

export const UpdateCakeRequestSchema = CreateCakeRequestSchema.partial();
export type TUpdateCakeRequest = z.infer<typeof UpdateCakeRequestSchema>;

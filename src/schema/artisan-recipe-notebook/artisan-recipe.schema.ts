import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const ArtisanRecipeSchema = EntityMetaSchema.extend({
  artisan_id: z.number(),
  category_id: z.number().nullable(),
  visibility_id: z.number(),
  title: z.string(),
  description: z.string().nullable(),
  servings: z.number().nullable(),
  prep_time: z.number().nullable(),
  cook_time: z.number().nullable(),
  total_time: z.number().nullable(),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  main_image_url: z.string().nullable(),
  notes: z.string().nullable(),
  tips: z.string().nullable(),
  cost_estimate: z.string().nullable(),
  rating: z.string(),
  times_made: z.number(),
  source: z.string().nullable(),
});
export type TArtisanRecipe = z.infer<typeof ArtisanRecipeSchema>;

export const CreateArtisanRecipeRequestSchema = z.object({
  artisan_id: z.number(),
  category_id: z.number().optional().nullable(),
  visibility_id: z.number(),
  title: z.string().max(500),
  description: z.string().optional().nullable(),
  servings: z.number().optional().nullable(),
  prep_time: z.number().optional().nullable(),
  cook_time: z.number().optional().nullable(),
  total_time: z.number().optional().nullable(),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
  main_image_url: z.string().max(500).optional().nullable(),
  notes: z.string().optional().nullable(),
  tips: z.string().optional().nullable(),
  cost_estimate: z.string().optional().nullable(),
  rating: z.string().optional(),
  times_made: z.number().optional(),
  source: z.string().max(500).optional().nullable(),
});
export type TCreateArtisanRecipeRequest = z.infer<
  typeof CreateArtisanRecipeRequestSchema
>;

export const UpdateArtisanRecipeRequestSchema =
  CreateArtisanRecipeRequestSchema.partial();
export type TUpdateArtisanRecipeRequest = z.infer<
  typeof UpdateArtisanRecipeRequestSchema
>;

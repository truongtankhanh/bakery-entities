import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const RecipeImageSchema = EntityMetaSchema.extend({
  recipe_id: z.number(),
  image_url: z.string(),
  caption: z.string().nullable(),
  is_main: z.boolean(),
  sort_order: z.number(),
});
export type TRecipeImage = z.infer<typeof RecipeImageSchema>;

export const CreateRecipeImageRequestSchema = z.object({
  recipe_id: z.number(),
  image_url: z.string().max(500),
  caption: z.string().max(255).optional().nullable(),
  is_main: z.boolean().optional(),
  sort_order: z.number().optional(),
});
export type TCreateRecipeImageRequest = z.infer<
  typeof CreateRecipeImageRequestSchema
>;

export const UpdateRecipeImageRequestSchema =
  CreateRecipeImageRequestSchema.partial();
export type TUpdateRecipeImageRequest = z.infer<
  typeof UpdateRecipeImageRequestSchema
>;

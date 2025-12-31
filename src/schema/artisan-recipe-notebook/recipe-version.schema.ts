import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const RecipeVersionSchema = EntityMetaSchema.extend({
  recipe_id: z.number(),
  version: z.number(),
  data: z.record(z.string(), z.unknown()),
  changes: z.string().nullable(),
});
export type TRecipeVersion = z.infer<typeof RecipeVersionSchema>;

export const CreateRecipeVersionRequestSchema = z.object({
  recipe_id: z.number(),
  version: z.number(),
  data: z.record(z.string(), z.unknown()),
  changes: z.string().optional().nullable(),
});
export type TCreateRecipeVersionRequest = z.infer<
  typeof CreateRecipeVersionRequestSchema
>;

export const UpdateRecipeVersionRequestSchema =
  CreateRecipeVersionRequestSchema.partial();
export type TUpdateRecipeVersionRequest = z.infer<
  typeof UpdateRecipeVersionRequestSchema
>;

import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const RecipeTagRelationSchema = EntityMetaSchema.extend({
  recipe_id: z.number(),
  tag_id: z.number(),
});
export type TRecipeTagRelation = z.infer<typeof RecipeTagRelationSchema>;

export const CreateRecipeTagRelationRequestSchema = z.object({
  recipe_id: z.number(),
  tag_id: z.number(),
});
export type TCreateRecipeTagRelationRequest = z.infer<
  typeof CreateRecipeTagRelationRequestSchema
>;

export const UpdateRecipeTagRelationRequestSchema =
  CreateRecipeTagRelationRequestSchema.partial();
export type TUpdateRecipeTagRelationRequest = z.infer<
  typeof UpdateRecipeTagRelationRequestSchema
>;

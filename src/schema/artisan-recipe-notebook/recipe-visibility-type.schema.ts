import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const RecipeVisibilityTypeSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: z.boolean(),
});
export type TRecipeVisibilityType = z.infer<typeof RecipeVisibilityTypeSchema>;

export const CreateRecipeVisibilityTypeRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional(),
});
export type TCreateRecipeVisibilityTypeRequest = z.infer<
  typeof CreateRecipeVisibilityTypeRequestSchema
>;

export const UpdateRecipeVisibilityTypeRequestSchema =
  CreateRecipeVisibilityTypeRequestSchema.partial();
export type TUpdateRecipeVisibilityTypeRequest = z.infer<
  typeof UpdateRecipeVisibilityTypeRequestSchema
>;

import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const RecipeVisibilityTypeSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TRecipeVisibilityType = z.infer<typeof RecipeVisibilityTypeSchema>;

export const CreateRecipeVisibilityTypeRequestSchema = z.object({
  code: z.string().min(1).max(100),
  label: z.string().min(1).max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().default(true),
});
export type TCreateRecipeVisibilityTypeRequest = z.infer<
  typeof CreateRecipeVisibilityTypeRequestSchema
>;

export const UpdateRecipeVisibilityTypeRequestSchema =
  CreateRecipeVisibilityTypeRequestSchema.partial();
export type TUpdateRecipeVisibilityTypeRequest = z.infer<
  typeof UpdateRecipeVisibilityTypeRequestSchema
>;

import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const RecipeIngredientSchema = EntityMetaSchema.extend({
  recipe_id: z.number(),
  name: z.string(),
  quantity: z.string().nullable(),
  unit: z.string().nullable(),
  notes: z.string().nullable(),
  group_name: z.string().nullable(),
  is_optional: NumberToBooleanSchema,
});
export type TRecipeIngredient = z.infer<typeof RecipeIngredientSchema>;

export const CreateRecipeIngredientRequestSchema = z.object({
  recipe_id: z.number(),
  name: z.string().max(255),
  quantity: z.string().optional().nullable(),
  unit: z.string().max(50).optional().nullable(),
  notes: z.string().max(500).optional().nullable(),
  group_name: z.string().max(100).optional().nullable(),
  is_optional: z.boolean().optional().default(false),
});
export type TCreateRecipeIngredientRequest = z.infer<
  typeof CreateRecipeIngredientRequestSchema
>;

export const UpdateRecipeIngredientRequestSchema =
  CreateRecipeIngredientRequestSchema.partial();
export type TUpdateRecipeIngredientRequest = z.infer<
  typeof UpdateRecipeIngredientRequestSchema
>;

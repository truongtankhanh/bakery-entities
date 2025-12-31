import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const CakeIngredientSchema = EntityMetaSchema.extend({
  cake_id: z.number(),
  ingredient_id: z.number(),
  quantity: z.number(),
  unit_override_id: z.number().nullable(),
  is_optional: z.number(),
});
export type TCakeIngredient = z.infer<typeof CakeIngredientSchema>;

export const CreateCakeIngredientRequestSchema = z.object({
  cake_id: z.number().int().positive(),
  ingredient_id: z.number().int().positive(),
  quantity: z.number(),
  unit_override_id: z.number().int().positive().optional().nullable(),
  is_optional: z.number().optional(),
});
export type TCreateCakeIngredientRequest = z.infer<
  typeof CreateCakeIngredientRequestSchema
>;

export const UpdateCakeIngredientRequestSchema =
  CreateCakeIngredientRequestSchema.partial();
export type TUpdateCakeIngredientRequest = z.infer<
  typeof UpdateCakeIngredientRequestSchema
>;

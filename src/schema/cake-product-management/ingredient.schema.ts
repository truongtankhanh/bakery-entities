import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const IngredientSchema = EntityMetaSchema.extend({
  name: z.string(),
  description: z.string().nullable(),
  unit_id: z.number(),
  allergen_info: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TIngredient = z.infer<typeof IngredientSchema>;

export const CreateIngredientRequestSchema = z.object({
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  unit_id: z.number().int().positive(),
  allergen_info: z.string().max(255).optional().nullable(),
  is_active: z.boolean().default(true),
});
export type TCreateIngredientRequest = z.infer<
  typeof CreateIngredientRequestSchema
>;

export const UpdateIngredientRequestSchema =
  CreateIngredientRequestSchema.partial();
export type TUpdateIngredientRequest = z.infer<
  typeof UpdateIngredientRequestSchema
>;

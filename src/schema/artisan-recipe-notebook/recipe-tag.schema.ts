import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const RecipeTagSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TRecipeTag = z.infer<typeof RecipeTagSchema>;

export const CreateRecipeTagRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional().default(true),
});
export type TCreateRecipeTagRequest = z.infer<
  typeof CreateRecipeTagRequestSchema
>;

export const UpdateRecipeTagRequestSchema =
  CreateRecipeTagRequestSchema.partial();
export type TUpdateRecipeTagRequest = z.infer<
  typeof UpdateRecipeTagRequestSchema
>;

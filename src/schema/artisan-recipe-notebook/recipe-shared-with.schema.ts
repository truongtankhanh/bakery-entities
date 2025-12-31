import {z} from 'zod';
import {
  DateSchema,
  EntityMetaSchema,
  NumberToBooleanSchema,
} from '../base.schema';

export const RecipeSharedWithSchema = EntityMetaSchema.extend({
  recipe_id: z.number(),
  shared_to_artisan_id: z.number(),
  can_edit: NumberToBooleanSchema,
  shared_at: DateSchema,
  expires_at: DateSchema.nullable(),
});
export type TRecipeSharedWith = z.infer<typeof RecipeSharedWithSchema>;

export const CreateRecipeSharedWithRequestSchema = z.object({
  recipe_id: z.number(),
  shared_to_artisan_id: z.number(),
  can_edit: z.boolean().optional().default(false),
  shared_at: DateSchema,
  expires_at: DateSchema.optional().nullable(),
});
export type TCreateRecipeSharedWithRequest = z.infer<
  typeof CreateRecipeSharedWithRequestSchema
>;

export const UpdateRecipeSharedWithRequestSchema =
  CreateRecipeSharedWithRequestSchema.partial();
export type TUpdateRecipeSharedWithRequest = z.infer<
  typeof UpdateRecipeSharedWithRequestSchema
>;

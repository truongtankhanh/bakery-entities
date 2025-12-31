import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const RecipeCategorySchema = EntityMetaSchema.extend({
  name: z.string(),
  description: z.string().nullable(),
  parent_id: z.number().nullable(),
  is_active: z.boolean(),
});
export type TRecipeCategory = z.infer<typeof RecipeCategorySchema>;

export const CreateRecipeCategoryRequestSchema = z.object({
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  parent_id: z.number().optional().nullable(),
  is_active: z.boolean().optional(),
});
export type TCreateRecipeCategoryRequest = z.infer<
  typeof CreateRecipeCategoryRequestSchema
>;

export const UpdateRecipeCategoryRequestSchema =
  CreateRecipeCategoryRequestSchema.partial();
export type TUpdateRecipeCategoryRequest = z.infer<
  typeof UpdateRecipeCategoryRequestSchema
>;

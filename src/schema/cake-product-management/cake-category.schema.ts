import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const CakeCategorySchema = EntityMetaSchema.extend({
  name: z.string(),
  description: z.string().nullable(),
  parent_id: z.number().nullable(),
  is_active: z.boolean(),
});
export type TCakeCategory = z.infer<typeof CakeCategorySchema>;

export const CreateCakeCategoryRequestSchema = z.object({
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  parent_id: z.number().int().positive().optional().nullable(),
  is_active: z.boolean().optional(),
});
export type TCreateCakeCategoryRequest = z.infer<
  typeof CreateCakeCategoryRequestSchema
>;

export const UpdateCakeCategoryRequestSchema =
  CreateCakeCategoryRequestSchema.partial();
export type TUpdateCakeCategoryRequest = z.infer<
  typeof UpdateCakeCategoryRequestSchema
>;

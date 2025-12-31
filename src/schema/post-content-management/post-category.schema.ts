import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const PostCategorySchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
  parent_id: z.number().nullable(),
});
export type TPostCategory = z.infer<typeof PostCategorySchema>;

export const CreatePostCategoryRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional().default(true),
  parent_id: z.number().optional().nullable(),
});
export type TCreatePostCategoryRequest = z.infer<
  typeof CreatePostCategoryRequestSchema
>;

export const UpdatePostCategoryRequestSchema =
  CreatePostCategoryRequestSchema.partial();
export type TUpdatePostCategoryRequest = z.infer<
  typeof UpdatePostCategoryRequestSchema
>;

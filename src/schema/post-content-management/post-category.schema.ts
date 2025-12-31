import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const PostCategorySchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: z.boolean(),
});
export type TPostCategory = z.infer<typeof PostCategorySchema>;

export const CreatePostCategoryRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional(),
});
export type TCreatePostCategoryRequest = z.infer<
  typeof CreatePostCategoryRequestSchema
>;

export const UpdatePostCategoryRequestSchema =
  CreatePostCategoryRequestSchema.partial();
export type TUpdatePostCategoryRequest = z.infer<
  typeof UpdatePostCategoryRequestSchema
>;

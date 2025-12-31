import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const PostTagSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TPostTag = z.infer<typeof PostTagSchema>;

export const CreatePostTagRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional(),
});
export type TCreatePostTagRequest = z.infer<typeof CreatePostTagRequestSchema>;

export const UpdatePostTagRequestSchema = CreatePostTagRequestSchema.partial();
export type TUpdatePostTagRequest = z.infer<typeof UpdatePostTagRequestSchema>;

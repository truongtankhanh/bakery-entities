import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const PostStatusSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TPostStatus = z.infer<typeof PostStatusSchema>;

export const CreatePostStatusRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional().default(true),
});
export type TCreatePostStatusRequest = z.infer<
  typeof CreatePostStatusRequestSchema
>;

export const UpdatePostStatusRequestSchema =
  CreatePostStatusRequestSchema.partial();
export type TUpdatePostStatusRequest = z.infer<
  typeof UpdatePostStatusRequestSchema
>;

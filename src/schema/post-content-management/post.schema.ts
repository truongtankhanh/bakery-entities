import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const PostSchema = EntityMetaSchema.extend({
  title: z.string(),
  excerpt: z.string().nullable(),
  content: z.string(),
  is_public: NumberToBooleanSchema,
  featured: NumberToBooleanSchema,
  view_count: z.number(),
  comment_count: z.number(),
  allow_comments: NumberToBooleanSchema,
  author_id: z.number(),
  category_id: z.number().nullable(),
  status_id: z.number(),
});
export type TPost = z.infer<typeof PostSchema>;

export const CreatePostRequestSchema = z.object({
  title: z.string().max(255),
  excerpt: z.string().optional().nullable(),
  content: z.string(),
  is_public: z.boolean().optional(),
  featured: z.boolean().optional(),
  view_count: z.number().optional(),
  comment_count: z.number().optional(),
  allow_comments: z.boolean().optional(),
  author_id: z.number().int().positive(),
  category_id: z.number().int().positive().optional().nullable(),
  status_id: z.number().int().positive(),
});
export type TCreatePostRequest = z.infer<typeof CreatePostRequestSchema>;

export const UpdatePostRequestSchema = CreatePostRequestSchema.partial();
export type TUpdatePostRequest = z.infer<typeof UpdatePostRequestSchema>;

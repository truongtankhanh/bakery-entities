import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const PostTagRelationSchema = EntityMetaSchema.extend({
  post_id: z.number(),
  tag_id: z.number(),
});
export type TPostTagRelation = z.infer<typeof PostTagRelationSchema>;

export const CreatePostTagRelationRequestSchema = z.object({
  post_id: z.number().int().positive(),
  tag_id: z.number().int().positive(),
});
export type TCreatePostTagRelationRequest = z.infer<
  typeof CreatePostTagRelationRequestSchema
>;

export const UpdatePostTagRelationRequestSchema =
  CreatePostTagRelationRequestSchema.partial();
export type TUpdatePostTagRelationRequest = z.infer<
  typeof UpdatePostTagRelationRequestSchema
>;

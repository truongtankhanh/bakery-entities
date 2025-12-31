import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const ReviewSchema = EntityMetaSchema.extend({
  rating: z.number(),
  title: z.string().nullable(),
  content: z.string().nullable(),
  user_id: z.number(),
  cake_id: z.number(),
});
export type TReview = z.infer<typeof ReviewSchema>;

export const CreateReviewRequestSchema = z.object({
  rating: z.number(),
  title: z.string().max(255).optional().nullable(),
  content: z.string().optional().nullable(),
  user_id: z.number().int().positive(),
  cake_id: z.number().int().positive(),
});
export type TCreateReviewRequest = z.infer<typeof CreateReviewRequestSchema>;

export const UpdateReviewRequestSchema = CreateReviewRequestSchema.partial();
export type TUpdateReviewRequest = z.infer<typeof UpdateReviewRequestSchema>;

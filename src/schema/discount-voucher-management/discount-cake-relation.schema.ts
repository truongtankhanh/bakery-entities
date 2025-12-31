import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const DiscountCakeRelationSchema = EntityMetaSchema.extend({
  discount_id: z.number(),
  cake_id: z.number(),
});
export type TDiscountCakeRelation = z.infer<typeof DiscountCakeRelationSchema>;

export const CreateDiscountCakeRelationRequestSchema = z.object({
  discount_id: z.number().int().positive(),
  cake_id: z.number().int().positive(),
});
export type TCreateDiscountCakeRelationRequest = z.infer<
  typeof CreateDiscountCakeRelationRequestSchema
>;

export const UpdateDiscountCakeRelationRequestSchema =
  CreateDiscountCakeRelationRequestSchema.partial();
export type TUpdateDiscountCakeRelationRequest = z.infer<
  typeof UpdateDiscountCakeRelationRequestSchema
>;

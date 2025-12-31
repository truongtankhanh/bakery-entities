import {z} from 'zod';
import {DateSchema, EntityMetaSchema} from '../base.schema';

export const DiscountUserRelationSchema = EntityMetaSchema.extend({
  discount_id: z.number(),
  user_id: z.number(),
  assigned_at: DateSchema,
  expires_at: DateSchema.nullable(),
});
export type TDiscountUserRelation = z.infer<typeof DiscountUserRelationSchema>;

export const CreateDiscountUserRelationRequestSchema = z.object({
  discount_id: z.number().int().positive(),
  user_id: z.number().int().positive(),
  assigned_at: DateSchema.optional(),
  expires_at: DateSchema.optional().nullable(),
});
export type TCreateDiscountUserRelationRequest = z.infer<
  typeof CreateDiscountUserRelationRequestSchema
>;

export const UpdateDiscountUserRelationRequestSchema =
  CreateDiscountUserRelationRequestSchema.partial();
export type TUpdateDiscountUserRelationRequest = z.infer<
  typeof UpdateDiscountUserRelationRequestSchema
>;

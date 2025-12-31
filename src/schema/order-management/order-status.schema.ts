import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const OrderStatusSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TOrderStatus = z.infer<typeof OrderStatusSchema>;

export const CreateOrderStatusRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional().default(true),
});
export type TCreateOrderStatusRequest = z.infer<
  typeof CreateOrderStatusRequestSchema
>;

export const UpdateOrderStatusRequestSchema =
  CreateOrderStatusRequestSchema.partial();
export type TUpdateOrderStatusRequest = z.infer<
  typeof UpdateOrderStatusRequestSchema
>;

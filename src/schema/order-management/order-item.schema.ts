import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const OrderItemSchema = EntityMetaSchema.extend({
  order_id: z.number(),
  cake_id: z.number(),
  unit_price: z.number(),
  quantity: z.number(),
  discount_amount: z.number(),
  note: z.string().nullable(),
});
export type TOrderItem = z.infer<typeof OrderItemSchema>;

export const CreateOrderItemRequestSchema = z.object({
  order_id: z.number().int().positive(),
  cake_id: z.number().int().positive(),
  unit_price: z.number(),
  quantity: z.number().int().positive().optional(),
  discount_amount: z.number().optional(),
  note: z.string().max(255).optional().nullable(),
});
export type TCreateOrderItemRequest = z.infer<
  typeof CreateOrderItemRequestSchema
>;

export const UpdateOrderItemRequestSchema =
  CreateOrderItemRequestSchema.partial();
export type TUpdateOrderItemRequest = z.infer<
  typeof UpdateOrderItemRequestSchema
>;

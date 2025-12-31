import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const OrderSchema = EntityMetaSchema.extend({
  user_id: z.number(),
  payment_status_id: z.number(),
  payment_method_id: z.number(),
  order_status_id: z.number(),
  shipping_method_id: z.number(),
  order_code: z.string(),
  subtotal: z.number(),
  discount_amount: z.number(),
  shipping_fee: z.number(),
  total_amount: z.number(),
  customer_name: z.string(),
  customer_phone: z.string(),
  shipping_address: z.string(),
  customer_note: z.string().nullable(),
});
export type TOrder = z.infer<typeof OrderSchema>;

export const CreateOrderRequestSchema = z.object({
  user_id: z.number().int().positive(),
  payment_status_id: z.number().int().positive(),
  payment_method_id: z.number().int().positive(),
  order_status_id: z.number().int().positive(),
  shipping_method_id: z.number().int().positive(),
  order_code: z.string().max(50),
  subtotal: z.number().optional(),
  discount_amount: z.number().optional(),
  shipping_fee: z.number().optional(),
  total_amount: z.number(),
  customer_name: z.string().max(255),
  customer_phone: z.string().max(20),
  shipping_address: z.string(),
  customer_note: z.string().optional().nullable(),
});
export type TCreateOrderRequest = z.infer<typeof CreateOrderRequestSchema>;

export const UpdateOrderRequestSchema = CreateOrderRequestSchema.partial();
export type TUpdateOrderRequest = z.infer<typeof UpdateOrderRequestSchema>;

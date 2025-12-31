import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const OrderDiscountSchema = EntityMetaSchema.extend({
  code: z.string().nullable(),
  discount_type: z.enum(['percent', 'fixed', 'shipping']).nullable(),
  discount_value: z.string().nullable(),
  discount_amount: z.string(),
  order_id: z.number(),
  discount_id: z.number().nullable(),
  voucher_code_id: z.number().nullable(),
});
export type TOrderDiscount = z.infer<typeof OrderDiscountSchema>;

export const CreateOrderDiscountRequestSchema = z.object({
  code: z.string().max(150).optional().nullable(),
  discount_type: z.enum(['percent', 'fixed', 'shipping']).optional().nullable(),
  discount_value: z.string().optional().nullable(),
  discount_amount: z.string(),
  order_id: z.number().int().positive(),
  discount_id: z.number().int().positive().optional().nullable(),
  voucher_code_id: z.number().int().positive().optional().nullable(),
});
export type TCreateOrderDiscountRequest = z.infer<
  typeof CreateOrderDiscountRequestSchema
>;

export const UpdateOrderDiscountRequestSchema =
  CreateOrderDiscountRequestSchema.partial();
export type TUpdateOrderDiscountRequest = z.infer<
  typeof UpdateOrderDiscountRequestSchema
>;

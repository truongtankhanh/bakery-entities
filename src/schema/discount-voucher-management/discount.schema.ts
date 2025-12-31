import {z} from 'zod';
import {
  DateSchema,
  EntityMetaSchema,
  NumberToBooleanSchema,
} from '../base.schema';

export const DiscountSchema = EntityMetaSchema.extend({
  code: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  discount_type: z.enum(['percent', 'fixed', 'shipping']),
  discount_value: z.string(),
  max_discount_amount: z.string().nullable(),
  minimum_order_amount: z.string().nullable(),
  usage_limit: z.number().nullable(),
  usage_limit_per_user: z.number().nullable(),
  start_date: DateSchema,
  end_date: DateSchema,
  is_active: NumberToBooleanSchema,
});
export type TDiscount = z.infer<typeof DiscountSchema>;

export const CreateDiscountRequestSchema = z.object({
  code: z.string().max(100),
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  discount_type: z.enum(['percent', 'fixed', 'shipping']),
  discount_value: z.string(),
  max_discount_amount: z.string().optional().nullable(),
  minimum_order_amount: z.string().optional().nullable(),
  usage_limit: z.number().optional().nullable(),
  usage_limit_per_user: z.number().optional().nullable(),
  start_date: DateSchema,
  end_date: DateSchema,
  is_active: z.boolean().default(true),
});
export type TCreateDiscountRequest = z.infer<
  typeof CreateDiscountRequestSchema
>;

export const UpdateDiscountRequestSchema =
  CreateDiscountRequestSchema.partial();
export type TUpdateDiscountRequest = z.infer<
  typeof UpdateDiscountRequestSchema
>;

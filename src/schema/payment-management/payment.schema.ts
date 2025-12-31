import {z} from 'zod';
import {DateSchema, EntityMetaSchema} from '../base.schema';

export const PaymentSchema = EntityMetaSchema.extend({
  order_id: z.number(),
  user_id: z.number().nullable(),
  payment_method_id: z.number(),
  payment_status_id: z.number(),
  amount: z.number(),
  transaction_id: z.string().nullable(),
  provider_response: z.record(z.string(), z.unknown()).nullable(),
  paid_at: DateSchema.nullable(),
});
export type TPayment = z.infer<typeof PaymentSchema>;

export const CreatePaymentRequestSchema = z.object({
  order_id: z.number().int().positive(),
  user_id: z.number().int().positive().optional().nullable(),
  payment_method_id: z.number().int().positive(),
  payment_status_id: z.number().int().positive(),
  amount: z.number(),
  transaction_id: z.string().max(255).optional().nullable(),
  provider_response: z.record(z.string(), z.unknown()).optional().nullable(),
  paid_at: DateSchema.optional().nullable(),
});
export type TCreatePaymentRequest = z.infer<typeof CreatePaymentRequestSchema>;

export const UpdatePaymentRequestSchema = CreatePaymentRequestSchema.partial();
export type TUpdatePaymentRequest = z.infer<typeof UpdatePaymentRequestSchema>;

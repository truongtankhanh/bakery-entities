import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const PaymentStatusSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TPaymentStatus = z.infer<typeof PaymentStatusSchema>;

export const CreatePaymentStatusRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional().default(true),
});
export type TCreatePaymentStatusRequest = z.infer<
  typeof CreatePaymentStatusRequestSchema
>;

export const UpdatePaymentStatusRequestSchema =
  CreatePaymentStatusRequestSchema.partial();
export type TUpdatePaymentStatusRequest = z.infer<
  typeof UpdatePaymentStatusRequestSchema
>;

import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const PaymentMethodSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TPaymentMethod = z.infer<typeof PaymentMethodSchema>;

export const CreatePaymentMethodRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional().default(true),
});
export type TCreatePaymentMethodRequest = z.infer<
  typeof CreatePaymentMethodRequestSchema
>;

export const UpdatePaymentMethodRequestSchema =
  CreatePaymentMethodRequestSchema.partial();
export type TUpdatePaymentMethodRequest = z.infer<
  typeof UpdatePaymentMethodRequestSchema
>;

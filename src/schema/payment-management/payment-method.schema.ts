import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const PaymentMethodSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: z.boolean(),
});
export type TPaymentMethod = z.infer<typeof PaymentMethodSchema>;

export const CreatePaymentMethodRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional(),
});
export type TCreatePaymentMethodRequest = z.infer<
  typeof CreatePaymentMethodRequestSchema
>;

export const UpdatePaymentMethodRequestSchema =
  CreatePaymentMethodRequestSchema.partial();
export type TUpdatePaymentMethodRequest = z.infer<
  typeof UpdatePaymentMethodRequestSchema
>;

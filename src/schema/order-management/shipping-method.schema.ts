import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const ShippingMethodSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TShippingMethod = z.infer<typeof ShippingMethodSchema>;

export const CreateShippingMethodRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional().default(true),
});
export type TCreateShippingMethodRequest = z.infer<
  typeof CreateShippingMethodRequestSchema
>;

export const UpdateShippingMethodRequestSchema =
  CreateShippingMethodRequestSchema.partial();
export type TUpdateShippingMethodRequest = z.infer<
  typeof UpdateShippingMethodRequestSchema
>;

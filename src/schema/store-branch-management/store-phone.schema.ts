import {z} from 'zod';

import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const StorePhoneSchema = EntityMetaSchema.extend({
  store_id: z.number().int().nonnegative(),
  phone: z.string().max(20),
  type: z.enum(['main', 'hotline', 'support', 'fax', 'other']),
  is_primary: NumberToBooleanSchema,
  display_order: z.number().int().nonnegative(),
});
export type TStorePhone = z.infer<typeof StorePhoneSchema>;

export const CreateStorePhoneRequestSchema = z.object({
  store_id: z.number().int().nonnegative(),
  phone: z.string().max(20),
  type: z.enum(['main', 'hotline', 'support', 'fax', 'other']).optional(),
  is_primary: z.boolean().optional().default(false),
  display_order: z.number().int().nonnegative().optional(),
});
export type TCreateStorePhoneRequest = z.infer<
  typeof CreateStorePhoneRequestSchema
>;

export const UpdateStorePhoneRequestSchema =
  CreateStorePhoneRequestSchema.partial();
export type TUpdateStorePhoneRequest = z.infer<
  typeof UpdateStorePhoneRequestSchema
>;

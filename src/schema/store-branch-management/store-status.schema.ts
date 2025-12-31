import {z} from 'zod';

import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const StoreStatusSchema = EntityMetaSchema.extend({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).nullable(),
  is_active: NumberToBooleanSchema,
});
export type TStoreStatus = z.infer<typeof StoreStatusSchema>;

export const CreateStoreStatusRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).nullable().optional(),
  is_active: z.boolean().optional().default(true),
});
export type TCreateStoreStatusRequest = z.infer<
  typeof CreateStoreStatusRequestSchema
>;

export const UpdateStoreStatusRequestSchema =
  CreateStoreStatusRequestSchema.partial();
export type TUpdateStoreStatusRequest = z.infer<
  typeof UpdateStoreStatusRequestSchema
>;

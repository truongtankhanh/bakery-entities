import {z} from 'zod';

import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const StoreOperatingHourSchema = EntityMetaSchema.extend({
  store_id: z.number().int().nonnegative(),
  weekday_id: z.number().int().nonnegative(),
  open_time: z.string().nullable(),
  close_time: z.string().nullable(),
  is_closed: NumberToBooleanSchema,
  special_note: z.string().max(255).nullable(),
});
export type TStoreOperatingHour = z.infer<typeof StoreOperatingHourSchema>;

export const CreateStoreOperatingHourRequestSchema = z.object({
  store_id: z.number().int().nonnegative(),
  weekday_id: z.number().int().nonnegative(),
  open_time: z.string().nullable().optional(),
  close_time: z.string().nullable().optional(),
  is_closed: z.boolean().optional().default(false),
  special_note: z.string().max(255).nullable().optional(),
});
export type TCreateStoreOperatingHourRequest = z.infer<
  typeof CreateStoreOperatingHourRequestSchema
>;

export const UpdateStoreOperatingHourRequestSchema =
  CreateStoreOperatingHourRequestSchema.partial();
export type TUpdateStoreOperatingHourRequest = z.infer<
  typeof UpdateStoreOperatingHourRequestSchema
>;

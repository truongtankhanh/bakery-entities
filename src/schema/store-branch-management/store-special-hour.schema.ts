import {z} from 'zod';

import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const StoreSpecialHourSchema = EntityMetaSchema.extend({
  store_id: z.number().int().nonnegative(),
  date: z.string(),
  name: z.string().max(255),
  open_time: z.string().nullable(),
  close_time: z.string().nullable(),
  is_closed: NumberToBooleanSchema,
  description: z.string().nullable(),
});
export type TStoreSpecialHour = z.infer<typeof StoreSpecialHourSchema>;

export const CreateStoreSpecialHourRequestSchema = z.object({
  store_id: z.number().int().nonnegative(),
  date: z.string(),
  name: z.string().max(255),
  open_time: z.string().nullable().optional(),
  close_time: z.string().nullable().optional(),
  is_closed: z.boolean().optional().default(false),
  description: z.string().nullable().optional(),
});
export type TCreateStoreSpecialHourRequest = z.infer<
  typeof CreateStoreSpecialHourRequestSchema
>;

export const UpdateStoreSpecialHourRequestSchema =
  CreateStoreSpecialHourRequestSchema.partial();
export type TUpdateStoreSpecialHourRequest = z.infer<
  typeof UpdateStoreSpecialHourRequestSchema
>;

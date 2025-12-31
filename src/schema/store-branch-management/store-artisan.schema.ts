import {z} from 'zod';

import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const StoreArtisanSchema = EntityMetaSchema.extend({
  store_id: z.number().int().nonnegative(),
  artisan_id: z.number().int().nonnegative(),
  role_id: z.number().int().nonnegative().nullable(),
  is_primary: NumberToBooleanSchema,
  start_date: z.string().nullable(),
  end_date: z.string().nullable(),
});
export type TStoreArtisan = z.infer<typeof StoreArtisanSchema>;

export const CreateStoreArtisanRequestSchema = z.object({
  store_id: z.number().int().nonnegative(),
  artisan_id: z.number().int().nonnegative(),
  role_id: z.number().int().nonnegative().nullable().optional(),
  is_primary: z.boolean().optional().default(false),
  start_date: z.string().nullable().optional(),
  end_date: z.string().nullable().optional(),
});
export type TCreateStoreArtisanRequest = z.infer<
  typeof CreateStoreArtisanRequestSchema
>;

export const UpdateStoreArtisanRequestSchema =
  CreateStoreArtisanRequestSchema.partial();
export type TUpdateStoreArtisanRequest = z.infer<
  typeof UpdateStoreArtisanRequestSchema
>;

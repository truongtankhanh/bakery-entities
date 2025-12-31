import {z} from 'zod';

import {DateSchema, EntityMetaSchema} from '../base.schema';

export const StoreInventorySchema = EntityMetaSchema.extend({
  store_id: z.number().int().nonnegative(),
  cake_id: z.number().int().nonnegative(),
  quantity: z.number().int().nonnegative(),
  reserved_quantity: z.number().int().nonnegative(),
  min_stock: z.number().int().nonnegative().nullable(),
  max_stock: z.number().int().nonnegative().nullable(),
  last_restock_at: DateSchema.nullable(),
});
export type TStoreInventory = z.infer<typeof StoreInventorySchema>;

export const CreateStoreInventoryRequestSchema = z.object({
  store_id: z.number().int().nonnegative(),
  cake_id: z.number().int().nonnegative(),
  quantity: z.number().int().nonnegative().optional(),
  reserved_quantity: z.number().int().nonnegative().optional(),
  min_stock: z.number().int().nonnegative().nullable().optional(),
  max_stock: z.number().int().nonnegative().nullable().optional(),
  last_restock_at: DateSchema.nullable().optional(),
});
export type TCreateStoreInventoryRequest = z.infer<
  typeof CreateStoreInventoryRequestSchema
>;

export const UpdateStoreInventoryRequestSchema =
  CreateStoreInventoryRequestSchema.partial();
export type TUpdateStoreInventoryRequest = z.infer<
  typeof UpdateStoreInventoryRequestSchema
>;

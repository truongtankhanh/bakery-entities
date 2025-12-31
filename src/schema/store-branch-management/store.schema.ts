import {z} from 'zod';

import {DateSchema, EntityMetaSchema} from '../base.schema';

export const StoreSchema = EntityMetaSchema.extend({
  name: z.string().max(255),
  code: z.string().max(50),
  description: z.string().nullable(),
  email: z.string().max(255).nullable(),
  address_line1: z.string().max(255),
  address_line2: z.string().max(255).nullable(),
  ward: z.string().max(150).nullable(),
  district: z.string().max(150).nullable(),
  city: z.string().max(150),
  postal_code: z.string().max(20).nullable(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
  thumbnail_url: z.string().max(500).nullable(),
  manager_id: z.number().int().nonnegative().nullable(),
  status_id: z.number().int().nonnegative(),
  is_main_store: z.boolean(),
  display_order: z.number().int().nonnegative(),
  opening_date: DateSchema.nullable(),
  website_url: z.string().max(255).nullable(),
  facebook_url: z.string().max(255).nullable(),
  instagram_url: z.string().max(255).nullable(),
  google_map_url: z.string().max(500).nullable(),
  special_features: z.record(z.string(), z.unknown()).nullable(),
});
export type TStore = z.infer<typeof StoreSchema>;

export const CreateStoreRequestSchema = z.object({
  name: z.string().max(255),
  code: z.string().max(50),
  description: z.string().nullable().optional(),
  email: z.string().max(255).nullable().optional(),
  address_line1: z.string().max(255),
  address_line2: z.string().max(255).nullable().optional(),
  ward: z.string().max(150).nullable().optional(),
  district: z.string().max(150).nullable().optional(),
  city: z.string().max(150),
  postal_code: z.string().max(20).nullable().optional(),
  latitude: z.number().nullable().optional(),
  longitude: z.number().nullable().optional(),
  thumbnail_url: z.string().max(500).nullable().optional(),
  manager_id: z.number().int().nonnegative().nullable().optional(),
  status_id: z.number().int().nonnegative().optional(),
  is_main_store: z.boolean().optional(),
  display_order: z.number().int().nonnegative().optional(),
  opening_date: DateSchema.nullable().optional(),
  website_url: z.string().max(255).nullable().optional(),
  facebook_url: z.string().max(255).nullable().optional(),
  instagram_url: z.string().max(255).nullable().optional(),
  google_map_url: z.string().max(500).nullable().optional(),
  special_features: z.record(z.string(), z.unknown()).nullable().optional(),
});
export type TCreateStoreRequest = z.infer<typeof CreateStoreRequestSchema>;

export const UpdateStoreRequestSchema = CreateStoreRequestSchema.partial();
export type TUpdateStoreRequest = z.infer<typeof UpdateStoreRequestSchema>;

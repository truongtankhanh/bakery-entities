import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const ArtisanProductStatusSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TArtisanProductStatus = z.infer<typeof ArtisanProductStatusSchema>;

export const CreateArtisanProductStatusRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().default(true),
});
export type TCreateArtisanProductStatusRequest = z.infer<
  typeof CreateArtisanProductStatusRequestSchema
>;

export const UpdateArtisanProductStatusRequestSchema =
  CreateArtisanProductStatusRequestSchema.partial();
export type TUpdateArtisanProductStatusRequest = z.infer<
  typeof UpdateArtisanProductStatusRequestSchema
>;

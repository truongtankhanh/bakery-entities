import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const ArtisanStatusSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: z.boolean(),
});
export type TArtisanStatus = z.infer<typeof ArtisanStatusSchema>;

export const CreateArtisanStatusRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional(),
});
export type TCreateArtisanStatusRequest = z.infer<
  typeof CreateArtisanStatusRequestSchema
>;

export const UpdateArtisanStatusRequestSchema =
  CreateArtisanStatusRequestSchema.partial();
export type TUpdateArtisanStatusRequest = z.infer<
  typeof UpdateArtisanStatusRequestSchema
>;

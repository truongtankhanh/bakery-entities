import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const ArtisanSpecialtyLevelSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: z.boolean(),
});
export type TArtisanSpecialtyLevel = z.infer<
  typeof ArtisanSpecialtyLevelSchema
>;

export const CreateArtisanSpecialtyLevelRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional(),
});
export type TCreateArtisanSpecialtyLevelRequest = z.infer<
  typeof CreateArtisanSpecialtyLevelRequestSchema
>;

export const UpdateArtisanSpecialtyLevelRequestSchema =
  CreateArtisanSpecialtyLevelRequestSchema.partial();
export type TUpdateArtisanSpecialtyLevelRequest = z.infer<
  typeof UpdateArtisanSpecialtyLevelRequestSchema
>;

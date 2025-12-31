import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const ArtisanSpecialtySchema = EntityMetaSchema.extend({
  artisan_id: z.number(),
  specialty_id: z.number(),
  level_id: z.number().nullable(),
  years_experience: z.number().nullable(),
  verified: z.number(),
  status_id: z.number(),
});
export type TArtisanSpecialty = z.infer<typeof ArtisanSpecialtySchema>;

export const CreateArtisanSpecialtyRequestSchema = z.object({
  artisan_id: z.number().int().positive(),
  specialty_id: z.number().int().positive(),
  level_id: z.number().int().positive().optional().nullable(),
  years_experience: z.number().int().positive().optional().nullable(),
  verified: z.number().optional(),
  status_id: z.number().int().positive().optional(),
});
export type TCreateArtisanSpecialtyRequest = z.infer<
  typeof CreateArtisanSpecialtyRequestSchema
>;

export const UpdateArtisanSpecialtyRequestSchema =
  CreateArtisanSpecialtyRequestSchema.partial();
export type TUpdateArtisanSpecialtyRequest = z.infer<
  typeof UpdateArtisanSpecialtyRequestSchema
>;

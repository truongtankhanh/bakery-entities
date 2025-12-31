import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const ArtisanSchema = EntityMetaSchema.extend({
  user_id: z.number().nullable(),
  stage_name: z.string(),
  experience_years: z.number().nullable(),
  bio: z.string().nullable(),
  location: z.string().nullable(),
  rating: z.number(),
  rating_count: z.number(),
  status_id: z.number(),
});
export type TArtisan = z.infer<typeof ArtisanSchema>;

export const CreateArtisanRequestSchema = z.object({
  user_id: z.number().int().positive().optional().nullable(),
  stage_name: z.string().max(255),
  experience_years: z.number().int().positive().optional().nullable(),
  bio: z.string().optional().nullable(),
  location: z.string().max(255).optional().nullable(),
  rating: z.number().optional(),
  rating_count: z.number().int().positive().optional(),
  status_id: z.number().int().positive().optional(),
});
export type TCreateArtisanRequest = z.infer<typeof CreateArtisanRequestSchema>;

export const UpdateArtisanRequestSchema = CreateArtisanRequestSchema.partial();
export type TUpdateArtisanRequest = z.infer<typeof UpdateArtisanRequestSchema>;

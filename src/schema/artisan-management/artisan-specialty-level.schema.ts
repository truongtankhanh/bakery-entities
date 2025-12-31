import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const ArtisanSpecialtyLevelSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TArtisanSpecialtyLevel = z.infer<
  typeof ArtisanSpecialtyLevelSchema
>;

export const CreateArtisanSpecialtyLevelRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().default(true),
});
export type TCreateArtisanSpecialtyLevelRequest = z.infer<
  typeof CreateArtisanSpecialtyLevelRequestSchema
>;

export const UpdateArtisanSpecialtyLevelRequestSchema =
  CreateArtisanSpecialtyLevelRequestSchema.partial();
export type TUpdateArtisanSpecialtyLevelRequest = z.infer<
  typeof UpdateArtisanSpecialtyLevelRequestSchema
>;

import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const ArtisanSpecialtyStatusSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TArtisanSpecialtyStatus = z.infer<
  typeof ArtisanSpecialtyStatusSchema
>;

export const CreateArtisanSpecialtyStatusRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().default(true),
});
export type TCreateArtisanSpecialtyStatusRequest = z.infer<
  typeof CreateArtisanSpecialtyStatusRequestSchema
>;

export const UpdateArtisanSpecialtyStatusRequestSchema =
  CreateArtisanSpecialtyStatusRequestSchema.partial();
export type TUpdateArtisanSpecialtyStatusRequest = z.infer<
  typeof UpdateArtisanSpecialtyStatusRequestSchema
>;

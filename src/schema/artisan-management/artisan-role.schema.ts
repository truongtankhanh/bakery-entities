import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const ArtisanRoleSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TArtisanRole = z.infer<typeof ArtisanRoleSchema>;

export const CreateArtisanRoleRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().default(true),
});
export type TCreateArtisanRoleRequest = z.infer<
  typeof CreateArtisanRoleRequestSchema
>;

export const UpdateArtisanRoleRequestSchema =
  CreateArtisanRoleRequestSchema.partial();
export type TUpdateArtisanRoleRequest = z.infer<
  typeof UpdateArtisanRoleRequestSchema
>;

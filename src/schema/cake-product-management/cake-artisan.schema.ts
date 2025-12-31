import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const CakeArtisanSchema = EntityMetaSchema.extend({
  cake_id: z.number(),
  artisan_id: z.number().nullable(),
  status_id: z.number(),
  verified: NumberToBooleanSchema,
});
export type TCakeArtisan = z.infer<typeof CakeArtisanSchema>;

export const CreateCakeArtisanRequestSchema = z.object({
  cake_id: z.number().int().positive(),
  artisan_id: z.number().int().positive().optional().nullable(),
  status_id: z.number().int().positive().optional(),
  verified: z.boolean().default(false),
});
export type TCreateCakeArtisanRequest = z.infer<
  typeof CreateCakeArtisanRequestSchema
>;

export const UpdateCakeArtisanRequestSchema =
  CreateCakeArtisanRequestSchema.partial();
export type TUpdateCakeArtisanRequest = z.infer<
  typeof UpdateCakeArtisanRequestSchema
>;

import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const SpecialtySchema = EntityMetaSchema.extend({
  name: z.string(),
  description: z.string().nullable(),
  status_id: z.number(),
});
export type TSpecialty = z.infer<typeof SpecialtySchema>;

export const CreateSpecialtyRequestSchema = z.object({
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  status_id: z.number().int().positive().optional(),
});
export type TCreateSpecialtyRequest = z.infer<
  typeof CreateSpecialtyRequestSchema
>;

export const UpdateSpecialtyRequestSchema =
  CreateSpecialtyRequestSchema.partial();
export type TUpdateSpecialtyRequest = z.infer<
  typeof UpdateSpecialtyRequestSchema
>;

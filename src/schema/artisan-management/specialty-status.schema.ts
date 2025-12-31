import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const SpecialtyStatusSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: z.boolean(),
});
export type TSpecialtyStatus = z.infer<typeof SpecialtyStatusSchema>;

export const CreateSpecialtyStatusRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional(),
});
export type TCreateSpecialtyStatusRequest = z.infer<
  typeof CreateSpecialtyStatusRequestSchema
>;

export const UpdateSpecialtyStatusRequestSchema =
  CreateSpecialtyStatusRequestSchema.partial();
export type TUpdateSpecialtyStatusRequest = z.infer<
  typeof UpdateSpecialtyStatusRequestSchema
>;

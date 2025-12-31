import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const ModuleStatusSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: z.boolean(),
});
export type TModuleStatus = z.infer<typeof ModuleStatusSchema>;

export const CreateModuleStatusRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional(),
});
export type TCreateModuleStatusRequest = z.infer<
  typeof CreateModuleStatusRequestSchema
>;

export const UpdateModuleStatusRequestSchema =
  CreateModuleStatusRequestSchema.partial();
export type TUpdateModuleStatusRequest = z.infer<
  typeof UpdateModuleStatusRequestSchema
>;

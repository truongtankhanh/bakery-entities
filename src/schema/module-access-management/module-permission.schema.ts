import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const ModulePermissionSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TModulePermission = z.infer<typeof ModulePermissionSchema>;

export const CreateModulePermissionRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional().default(true),
});
export type TCreateModulePermissionRequest = z.infer<
  typeof CreateModulePermissionRequestSchema
>;

export const UpdateModulePermissionRequestSchema =
  CreateModulePermissionRequestSchema.partial();
export type TUpdateModulePermissionRequest = z.infer<
  typeof UpdateModulePermissionRequestSchema
>;

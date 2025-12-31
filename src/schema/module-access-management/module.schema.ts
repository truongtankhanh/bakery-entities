import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const ModuleSchema = EntityMetaSchema.extend({
  code: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  icon: z.string().nullable(),
  status_id: z.number(),
  is_system: NumberToBooleanSchema,
});
export type TModule = z.infer<typeof ModuleSchema>;

export const CreateModuleRequestSchema = z.object({
  code: z.string().max(50),
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  icon: z.string().max(100).optional().nullable(),
  status_id: z.number().int().positive().optional(),
  is_system: z.boolean().optional().default(true),
});
export type TCreateModuleRequest = z.infer<typeof CreateModuleRequestSchema>;

export const UpdateModuleRequestSchema = CreateModuleRequestSchema.partial();
export type TUpdateModuleRequest = z.infer<typeof UpdateModuleRequestSchema>;

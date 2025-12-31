import {z} from 'zod';
import {DateSchema, EntityMetaSchema} from '../base.schema';

export const UserModuleAccessSchema = EntityMetaSchema.extend({
  user_id: z.number(),
  module_id: z.number(),
  permission_id: z.number(),
  granted_by: z.number().nullable(),
  granted_at: DateSchema,
  expires_at: DateSchema.nullable(),
});
export type TUserModuleAccess = z.infer<typeof UserModuleAccessSchema>;

export const CreateUserModuleAccessRequestSchema = z.object({
  user_id: z.number().int().positive(),
  module_id: z.number().int().positive(),
  permission_id: z.number().int().positive(),
  granted_by: z.number().int().positive().optional().nullable(),
  granted_at: DateSchema,
  expires_at: DateSchema.optional().nullable(),
});
export type TCreateUserModuleAccessRequest = z.infer<
  typeof CreateUserModuleAccessRequestSchema
>;

export const UpdateUserModuleAccessRequestSchema =
  CreateUserModuleAccessRequestSchema.partial();
export type TUpdateUserModuleAccessRequest = z.infer<
  typeof UpdateUserModuleAccessRequestSchema
>;

import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const UserRoleSchema = EntityMetaSchema.extend({
  user_id: z.number(),
  role_id: z.number(),
});
export type TUserRole = z.infer<typeof UserRoleSchema>;

export const CreateUserRoleRequestSchema = z.object({
  user_id: z.number().int().positive(),
  role_id: z.number().int().positive(),
});
export type TCreateUserRoleRequest = z.infer<
  typeof CreateUserRoleRequestSchema
>;

export const UpdateUserRoleRequestSchema =
  CreateUserRoleRequestSchema.partial();
export type TUpdateUserRoleRequest = z.infer<
  typeof UpdateUserRoleRequestSchema
>;

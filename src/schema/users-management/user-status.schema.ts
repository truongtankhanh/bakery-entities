import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const UserStatusSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TUserStatus = z.infer<typeof UserStatusSchema>;

export const CreateUserStatusRequestSchema = z.object({
  code: z.string().min(1).max(100),
  label: z.string().min(1).max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().default(true),
});
export type TCreateUserStatusRequest = z.infer<
  typeof CreateUserStatusRequestSchema
>;

export const UpdateUserStatusRequestSchema =
  CreateUserStatusRequestSchema.partial();
export type TUpdateUserStatusRequest = z.infer<
  typeof UpdateUserStatusRequestSchema
>;

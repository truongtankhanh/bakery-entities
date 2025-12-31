import {z} from 'zod';
import {
  DateSchema,
  EntityMetaSchema,
  NumberToBooleanSchema,
} from '../base.schema';
import {GenderSchema} from './gender.schema';
import {UserStatusSchema} from './user-status.schema';

export const UserSchema = EntityMetaSchema.extend({
  email: z.string(),
  full_name: z.string(),
  avatar_url: z.string().nullable(),
  phone_number: z.string().nullable(),
  date_of_birth: DateSchema.nullable(),
  is_super_admin: NumberToBooleanSchema,
  must_change_password: NumberToBooleanSchema,
  gender_id: z.number().nullable(),
  gender: GenderSchema.nullable(),
  status_id: z.number(),
  status: UserStatusSchema.nullable(),
});
export type TUser = z.infer<typeof UserSchema>;

export const CreateUserRequestSchema = z.object({
  email: z.string().min(1).max(255),
  password: z.string().min(8).max(255),
  full_name: z.string().min(1).max(255),
  avatar_url: z.string().max(255).nullable(),
  phone_number: z.string().max(20).nullable(),
  date_of_birth: DateSchema.nullable(),
  is_super_admin: z.boolean(),
  must_change_password: z.boolean(),
});
export type TCreateUserRequest = z.infer<typeof CreateUserRequestSchema>;

export const UpdateUserRequestSchema = CreateUserRequestSchema.partial();
export type TUpdateUserRequest = z.infer<typeof UpdateUserRequestSchema>;

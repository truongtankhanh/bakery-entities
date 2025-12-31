import {z} from 'zod';
import {DateSchema, EntityMetaSchema} from '../base.schema';

export const UserTwoFactorAuthSchema = EntityMetaSchema.extend({
  user_id: z.number(),
  two_factor_method_id: z.number(),
  enabled: z.boolean(),
  secret_key: z.string().nullable(),
  backup_codes: z.array(z.string()).nullable(),
  last_verified_at: DateSchema.nullable(),
});
export type TUserTwoFactorAuth = z.infer<typeof UserTwoFactorAuthSchema>;

export const CreateUserTwoFactorAuthRequestSchema = z.object({
  user_id: z.number().int().positive(),
  two_factor_method_id: z.number().int().positive(),
  enabled: z.boolean().default(false),
  secret_key: z.string().max(255).nullable().optional(),
  backup_codes: z.array(z.string()).nullable().optional(),
  last_verified_at: DateSchema.nullable().optional(),
});
export type TCreateUserTwoFactorAuthRequest = z.infer<
  typeof CreateUserTwoFactorAuthRequestSchema
>;

export const UpdateUserTwoFactorAuthRequestSchema =
  CreateUserTwoFactorAuthRequestSchema.partial();
export type TUpdateUserTwoFactorAuthRequest = z.infer<
  typeof UpdateUserTwoFactorAuthRequestSchema
>;

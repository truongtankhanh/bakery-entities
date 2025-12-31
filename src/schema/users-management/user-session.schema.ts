import {z} from 'zod';
import {DateSchema, EntityMetaSchema} from '../base.schema';

export const UserSessionSchema = EntityMetaSchema.extend({
  user_id: z.number(),
  session_type_id: z.number().nullable(),
  ip_address: z.string().max(45).optional().nullable(),
  user_agent: z.string().max(500).optional().nullable(),
  expires_at: DateSchema,
  revoked_at: DateSchema.optional().nullable(),
});

export type TUserSession = z.infer<typeof UserSessionSchema>;

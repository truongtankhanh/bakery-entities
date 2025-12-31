import {z} from 'zod';
import {DateSchema, EntityMetaSchema} from '../base.schema';

export const ActivityLogSchema = EntityMetaSchema.extend({
  user_id: z.number().nullable(),
  action: z.string(),
  module: z.string(),
  level_id: z.number(),
  description: z.string().nullable(),
  metadata: z.record(z.string(), z.unknown()).nullable(),
  ip_address: z.string().nullable(),
  user_agent: z.string().nullable(),
  logged_at: DateSchema,
});
export type TActivityLog = z.infer<typeof ActivityLogSchema>;

export const CreateActivityLogRequestSchema = z.object({
  user_id: z.number().optional().nullable(),
  action: z.string().max(50),
  module: z.string().max(100),
  level_id: z.number(),
  description: z.string().optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional().nullable(),
  ip_address: z.string().max(45).optional().nullable(),
  user_agent: z.string().max(500).optional().nullable(),
  logged_at: DateSchema.optional().nullable(),
});
export type TCreateActivityLogRequest = z.infer<
  typeof CreateActivityLogRequestSchema
>;

export const UpdateActivityLogRequestSchema =
  CreateActivityLogRequestSchema.partial();
export type TUpdateActivityLogRequest = z.infer<
  typeof UpdateActivityLogRequestSchema
>;

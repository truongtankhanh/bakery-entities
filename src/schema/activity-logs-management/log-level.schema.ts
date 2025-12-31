import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const LogLevelSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TLogLevel = z.infer<typeof LogLevelSchema>;

export const CreateLogLevelRequestSchema = z.object({
  code: z.string().min(1).max(100),
  label: z.string().min(1).max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().default(true),
});
export type TCreateLogLevelRequest = z.infer<
  typeof CreateLogLevelRequestSchema
>;

export const UpdateLogLevelRequestSchema =
  CreateLogLevelRequestSchema.partial();
export type TUpdateLogLevelRequest = z.infer<
  typeof UpdateLogLevelRequestSchema
>;

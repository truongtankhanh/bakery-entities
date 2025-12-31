import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const SessionTypeSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TSessionType = z.infer<typeof SessionTypeSchema>;

export const CreateSessionTypeRequestSchema = z.object({
  code: z.string().min(1).max(100),
  label: z.string().min(1).max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().default(true),
});
export type TCreateSessionTypeRequest = z.infer<
  typeof CreateSessionTypeRequestSchema
>;

export const UpdateSessionTypeRequestSchema =
  CreateSessionTypeRequestSchema.partial();
export type TUpdateSessionTypeRequest = z.infer<
  typeof UpdateSessionTypeRequestSchema
>;

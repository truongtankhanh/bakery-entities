import {z} from 'zod';

import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const SettingSchema = EntityMetaSchema.extend({
  key_name: z.string().max(150),
  value: z.string().nullable(),
  json_value: z.unknown().nullable(),
  description: z.string().nullable(),
  is_system: NumberToBooleanSchema,
});
export type TSetting = z.infer<typeof SettingSchema>;

export const CreateSettingRequestSchema = z.object({
  key_name: z.string().max(150),
  value: z.string().nullable().optional(),
  json_value: z.unknown().nullable().optional(),
  description: z.string().nullable().optional(),
  is_system: z.boolean().optional().default(false),
});
export type TCreateSettingRequest = z.infer<typeof CreateSettingRequestSchema>;

export const UpdateSettingRequestSchema = CreateSettingRequestSchema.partial();
export type TUpdateSettingRequest = z.infer<typeof UpdateSettingRequestSchema>;

import {z} from 'zod';

import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const WeekdaySchema = EntityMetaSchema.extend({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).nullable(),
  is_active: NumberToBooleanSchema,
});
export type TWeekday = z.infer<typeof WeekdaySchema>;

export const CreateWeekdayRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).nullable().optional(),
  is_active: z.boolean().optional().default(true),
});
export type TCreateWeekdayRequest = z.infer<typeof CreateWeekdayRequestSchema>;

export const UpdateWeekdayRequestSchema = CreateWeekdayRequestSchema.partial();
export type TUpdateWeekdayRequest = z.infer<typeof UpdateWeekdayRequestSchema>;

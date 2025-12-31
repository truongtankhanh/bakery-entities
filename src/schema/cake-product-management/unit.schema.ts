import {z} from 'zod';
import {EntityMetaSchema, NumberToBooleanSchema} from '../base.schema';

export const UnitSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: NumberToBooleanSchema,
});
export type TUnit = z.infer<typeof UnitSchema>;

export const CreateUnitRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().default(true),
});
export type TCreateUnitRequest = z.infer<typeof CreateUnitRequestSchema>;

export const UpdateUnitRequestSchema = CreateUnitRequestSchema.partial();
export type TUpdateUnitRequest = z.infer<typeof UpdateUnitRequestSchema>;

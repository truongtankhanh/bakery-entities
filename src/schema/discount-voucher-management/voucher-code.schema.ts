import {z} from 'zod';
import {
  DateSchema,
  EntityMetaSchema,
  NumberToBooleanSchema,
} from '../base.schema';

export const VoucherCodeSchema = EntityMetaSchema.extend({
  code: z.string(),
  batch: z.string().nullable(),
  is_used: NumberToBooleanSchema,
  used_by: z.number().nullable(),
  used_at: DateSchema.nullable(),
  expires_at: DateSchema.nullable(),
  discount_id: z.number(),
});
export type TVoucherCode = z.infer<typeof VoucherCodeSchema>;

export const CreateVoucherCodeRequestSchema = z.object({
  code: z.string().max(150),
  batch: z.string().max(100).optional().nullable(),
  is_used: z.boolean().optional().default(false),
  used_by: z.number().int().positive().optional().nullable(),
  used_at: DateSchema.optional().nullable(),
  expires_at: DateSchema.optional().nullable(),
  discount_id: z.number().int().positive(),
});
export type TCreateVoucherCodeRequest = z.infer<
  typeof CreateVoucherCodeRequestSchema
>;

export const UpdateVoucherCodeRequestSchema =
  CreateVoucherCodeRequestSchema.partial();
export type TUpdateVoucherCodeRequest = z.infer<
  typeof UpdateVoucherCodeRequestSchema
>;

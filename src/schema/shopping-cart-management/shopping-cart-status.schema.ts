import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const ShoppingCartStatusSchema = EntityMetaSchema.extend({
  code: z.string(),
  label: z.string(),
  note: z.string().nullable(),
  is_active: z.boolean(),
});
export type TShoppingCartStatus = z.infer<typeof ShoppingCartStatusSchema>;

export const CreateShoppingCartStatusRequestSchema = z.object({
  code: z.string().max(100),
  label: z.string().max(255),
  note: z.string().max(255).optional().nullable(),
  is_active: z.boolean().optional(),
});
export type TCreateShoppingCartStatusRequest = z.infer<
  typeof CreateShoppingCartStatusRequestSchema
>;

export const UpdateShoppingCartStatusRequestSchema =
  CreateShoppingCartStatusRequestSchema.partial();
export type TUpdateShoppingCartStatusRequest = z.infer<
  typeof UpdateShoppingCartStatusRequestSchema
>;

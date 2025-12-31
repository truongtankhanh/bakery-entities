import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const ShoppingCartSchema = EntityMetaSchema.extend({
  total_items: z.number(),
  total_quantity: z.number(),
  user_id: z.number(),
  status_id: z.number(),
});
export type TShoppingCart = z.infer<typeof ShoppingCartSchema>;

export const CreateShoppingCartRequestSchema = z.object({
  total_items: z.number().optional(),
  total_quantity: z.number().optional(),
  user_id: z.number().int().positive(),
  status_id: z.number().int().positive(),
});
export type TCreateShoppingCartRequest = z.infer<
  typeof CreateShoppingCartRequestSchema
>;

export const UpdateShoppingCartRequestSchema =
  CreateShoppingCartRequestSchema.partial();
export type TUpdateShoppingCartRequest = z.infer<
  typeof UpdateShoppingCartRequestSchema
>;

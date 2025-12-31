import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const AddressSchema = EntityMetaSchema.extend({
  full_name: z.string(),
  phone_number: z.string(),
  address_line1: z.string(),
  address_line2: z.string().nullable(),
  ward: z.string().nullable(),
  district: z.string().nullable(),
  city: z.string().nullable(),
  is_default: z.boolean(),
});
export type TAddress = z.infer<typeof AddressSchema>;

export const CreateAddressRequestSchema = z.object({
  full_name: z.string().max(150),
  phone_number: z.string().max(20),
  address_line1: z.string().max(255),
  address_line2: z.string().max(255).optional().nullable(),
  ward: z.string().max(150).optional().nullable(),
  district: z.string().max(150).optional().nullable(),
  city: z.string().max(150).optional().nullable(),
  is_default: z.boolean().optional().default(false),
});
export type TCreateAddressRequest = z.infer<typeof CreateAddressRequestSchema>;

export const UpdateAddressRequestSchema = CreateAddressRequestSchema.partial();
export type TUpdateAddressRequest = z.infer<typeof UpdateAddressRequestSchema>;

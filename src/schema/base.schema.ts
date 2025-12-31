import {z} from 'zod';

export const DateSchema = z.preprocess(
  val => (typeof val === 'string' ? new Date(val) : val),
  z.date(),
);

export const NumberToBooleanSchema = z.number().transform(val => Boolean(val));

/**
 * Zod schema for entity metadata.
 *
 * This schema defines the common metadata fields for entities, including:
 * - `id`: The unique numeric identifier for the entity.
 * - `created_at`: The date and time when the entity was created.
 * - `updated_at`: The date and time when the entity was last updated.
 * - `deleted_at`: The date and time when the entity was deleted, or `null`/`undefined` if not deleted.
 */
export const EntityMetaSchema = z.object({
  id: z.number(),
  created_at: DateSchema,
  updated_at: DateSchema,
  deleted_at: DateSchema.nullable().optional(),
});

/**
 * Zod schema for a standard API response object.
 *
 * @property {string} message - A descriptive message about the API response.
 * @property {number} statusCode - The HTTP status code associated with the response.
 */
export const BaseApiResponseSchema = z.object({
  message: z.string(),
  statusCode: z.number(),
});

/**
 * Creates a Zod schema for an API response that extends the base API response schema
 * by adding a `data` property of the provided schema type.
 *
 * @template T - The type of the data property in the response.
 * @param schema - A Zod schema representing the shape of the `data` property.
 * @returns A Zod schema for the API response with a typed `data` property.
 */
export const ItemResponseSchema = <T>(schema: z.ZodType<T>) =>
  BaseApiResponseSchema.extend({
    data: schema,
  });
export type TItemResponse<T> = z.infer<
  ReturnType<typeof ItemResponseSchema<T>>
>;

/**
 * Creates a Zod schema for an API response containing an array of items of a specified type.
 *
 * @template T - The type of the items in the response data array.
 * @param schema - A Zod schema representing the type of each item in the data array.
 * @returns A Zod schema that extends the base API response schema with a `data` property,
 *          which is an array of the provided schema type.
 */
export const ItemsResponseSchema = <T>(schema: z.ZodType<T>) =>
  BaseApiResponseSchema.extend({
    data: z.array(schema),
  });
export type TItemsResponse<T> = z.infer<
  ReturnType<typeof ItemsResponseSchema<T>>
>;

/**
 * Creates a Zod schema for paginated data.
 *
 * @template T - The type of the items in the paginated data array.
 * @param schema - A Zod schema describing the shape of each item in the data array.
 * @returns A Zod object schema with the following properties:
 *   - `data`: An array of items conforming to the provided schema.
 *   - `total`: The total number of items (not just those in the current page).
 *
 * @example
 * const UserSchema = z.object({ id: z.string(), name: z.string() });
 * const PaginatedUserSchema = PaginatedDataSchema(UserSchema);
 */
export const PaginatedDataSchema = <T>(schema: z.ZodType<T>) =>
  z.object({
    data: z.array(schema),
    total: z.number(),
  });

/**
 * Creates a Zod schema for a paginated API response.
 *
 * @template T - The type of the items in the paginated data.
 * @param schema - A Zod schema representing the type of items in the paginated data.
 * @returns A Zod schema that extends the base API response schema with a paginated data field.
 */
export const PaginatedItemsResponseSchema = <T>(schema: z.ZodType<T>) =>
  BaseApiResponseSchema.extend({
    data: PaginatedDataSchema(schema),
  });
export type TPaginatedItemsResponse<T> = z.infer<
  ReturnType<typeof PaginatedItemsResponseSchema<T>>
>;

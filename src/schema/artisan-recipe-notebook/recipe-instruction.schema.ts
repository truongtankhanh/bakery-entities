import {z} from 'zod';
import {EntityMetaSchema} from '../base.schema';

export const RecipeInstructionSchema = EntityMetaSchema.extend({
  recipe_id: z.number(),
  step_number: z.number(),
  instruction: z.string(),
  image_url: z.string().nullable(),
  time: z.number().nullable(),
  temperature: z.string().nullable(),
  notes: z.string().nullable(),
});
export type TRecipeInstruction = z.infer<typeof RecipeInstructionSchema>;

export const CreateRecipeInstructionRequestSchema = z.object({
  recipe_id: z.number(),
  step_number: z.number(),
  instruction: z.string(),
  image_url: z.string().max(500).optional().nullable(),
  time: z.number().optional().nullable(),
  temperature: z.string().max(50).optional().nullable(),
  notes: z.string().optional().nullable(),
});
export type TCreateRecipeInstructionRequest = z.infer<
  typeof CreateRecipeInstructionRequestSchema
>;

export const UpdateRecipeInstructionRequestSchema =
  CreateRecipeInstructionRequestSchema.partial();
export type TUpdateRecipeInstructionRequest = z.infer<
  typeof UpdateRecipeInstructionRequestSchema
>;

import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, Index, JoinColumn, ManyToOne} from 'typeorm';

import {ArtisanRecipeEntity} from './artisan-recipe.entity';

@Entity('recipe_instructions')
@Index(['recipe', 'sort_order'])
export class RecipeInstructionEntity extends BaseEntity {
  @ManyToOne(() => ArtisanRecipeEntity, r => r.instructions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'recipe_id'})
  recipe: ArtisanRecipeEntity;

  @Column({type: 'int', unsigned: true, default: 0})
  sort_order: number;

  @Column({type: 'int', unsigned: true})
  step_number: number;

  @Column({type: 'text'})
  instruction: string;

  @Column({type: 'varchar', length: 500, nullable: true})
  image_url: string | null;

  @Column({type: 'int', unsigned: true, nullable: true})
  time: number | null; // phút

  @Column({type: 'varchar', length: 50, nullable: true})
  temperature: string | null; // "180°C", "350F"

  @Column({type: 'text', nullable: true})
  notes: string | null;
}

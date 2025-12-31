import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, Index, JoinColumn, ManyToOne} from 'typeorm';

import {ArtisanRecipeEntity} from './artisan-recipe.entity';

@Entity('recipe_ingredients')
@Index(['recipe'])
@Index(['group_name'])
export class RecipeIngredientEntity extends BaseEntity {
  @ManyToOne(() => ArtisanRecipeEntity, r => r.ingredients, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'recipe_id'})
  recipe: ArtisanRecipeEntity;

  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'decimal', precision: 10, scale: 2, nullable: true})
  quantity: string | null;

  @Column({type: 'varchar', length: 50, nullable: true})
  unit: string | null;

  @Column({type: 'varchar', length: 100, nullable: true})
  group_name: string | null;

  @Column({type: 'int', unsigned: true, default: 0})
  sort_order: number;

  @Column({type: 'boolean', default: false})
  is_optional: boolean;

  @Column({type: 'varchar', length: 500, nullable: true})
  notes: string | null;
}

import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {ArtisanRecipeEntity} from './artisan-recipe.entity';

@Entity('recipe_ingredients')
export class RecipeIngredientEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  recipe_id: number;

  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'decimal', precision: 10, scale: 2, nullable: true})
  quantity: string | null;

  @Column({type: 'varchar', length: 50, nullable: true})
  unit: string | null;

  @Column({type: 'varchar', length: 500, nullable: true})
  notes: string | null;

  @Column({type: 'varchar', length: 100, nullable: true})
  group_name: string | null;

  @Column({type: 'tinyint', default: 0})
  is_optional: number;

  @ManyToOne(() => ArtisanRecipeEntity, r => r.ingredients, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'recipe_id'})
  recipe: ArtisanRecipeEntity;
}

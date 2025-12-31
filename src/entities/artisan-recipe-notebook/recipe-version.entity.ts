import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {ArtisanRecipeEntity} from './artisan-recipe.entity';

@Entity('recipe_versions')
export class RecipeVersionEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  recipe_id: number;

  @Column({type: 'int', unsigned: true})
  version: number;

  @Column({type: 'json'})
  data: object;

  @Column({type: 'text', nullable: true})
  changes: string | null;

  @ManyToOne(() => ArtisanRecipeEntity, object => object.versions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'recipe_id'})
  recipe: ArtisanRecipeEntity;
}

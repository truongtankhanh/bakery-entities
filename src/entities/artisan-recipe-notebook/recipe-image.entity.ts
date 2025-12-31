import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {ArtisanRecipeEntity} from './artisan-recipe.entity';

@Entity('recipe_images')
export class RecipeImageEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  recipe_id: number;

  @Column({type: 'varchar', length: 500})
  image_url: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  caption: string | null;

  @Column({type: 'tinyint', default: 0})
  is_main: number;

  @Column({type: 'int', unsigned: true, default: 0})
  sort_order: number;

  @ManyToOne(() => ArtisanRecipeEntity, object => object.images, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'recipe_id'})
  recipe: ArtisanRecipeEntity;
}

import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {ArtisanRecipeEntity} from './artisan-recipe.entity';
import {ArtisanEntity} from '../artisan-management';

@Entity('recipe_shared_with')
export class RecipeSharedWithEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  recipe_id: number;

  @Column({type: 'int', unsigned: true})
  shared_to_artisan_id: number;

  @Column({type: 'tinyint', default: 0})
  can_edit: number;

  @Column({type: 'timestamp'})
  shared_at: Date;

  @Column({type: 'timestamp', nullable: true})
  expires_at: Date | null;

  @ManyToOne(() => ArtisanRecipeEntity, object => object.shared_with, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'recipe_id'})
  recipe: ArtisanRecipeEntity;

  @ManyToOne(() => ArtisanEntity, object => object.shared_with, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'shared_to_artisan_id'})
  shared_to_artisan: ArtisanEntity;
}

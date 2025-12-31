import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, Index, OneToMany} from 'typeorm';

import {ArtisanRecipeEntity} from './artisan-recipe.entity';

@Entity('recipe_visibility_types')
@Index(['code'], {unique: true})
export class RecipeVisibilityTypeEntity extends BaseEntity {
  @Column({type: 'varchar', length: 50})
  code: string;

  @Column({type: 'varchar', length: 100})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => ArtisanRecipeEntity, recipe => recipe.visibility, {
    lazy: true,
  })
  recipes: Promise<ArtisanRecipeEntity[]>;
}

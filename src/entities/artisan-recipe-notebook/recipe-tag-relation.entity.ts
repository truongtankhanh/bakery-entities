import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {ArtisanRecipeEntity} from './artisan-recipe.entity';
import {RecipeTagEntity} from './recipe-tag.entity';

@Entity('recipe_tag_relations')
export class RecipeTagRelationEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  recipe_id: number;

  @Column({type: 'int', unsigned: true})
  tag_id: number;

  @ManyToOne(() => ArtisanRecipeEntity, object => object.tag_relations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'recipe_id'})
  recipe: ArtisanRecipeEntity;

  @ManyToOne(() => RecipeTagEntity, object => object.tag_relations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'tag_id'})
  tag: RecipeTagEntity;
}

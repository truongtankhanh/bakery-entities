import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

import {RecipeCategoryEntity} from './recipe-category.entity';
import {RecipeImageEntity} from './recipe-image.entity';
import {RecipeIngredientEntity} from './recipe-ingredient.entity';
import {RecipeInstructionEntity} from './recipe-instruction.entity';
import {RecipeSharedWithEntity} from './recipe-shared-with.entity';
import {RecipeTagRelationEntity} from './recipe-tag-relation.entity';
import {RecipeVersionEntity} from './recipe-version.entity';
import {RecipeVisibilityTypeEntity} from './recipe-visibility-type.entity';
import {ArtisanEntity} from '../artisan-management';

@Entity('artisan_recipes')
export class ArtisanRecipeEntity extends BaseEntity {
  /* ===================== BASIC INFO ===================== */
  @Column({type: 'int', unsigned: true})
  artisan_id: number;

  @Column({type: 'int', unsigned: true, nullable: true})
  category_id: number | null;

  @Column({type: 'int', unsigned: true})
  visibility_id: number;

  @Column({type: 'varchar', length: 500})
  title: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  /* ===================== COOKING ===================== */

  @Column({type: 'int', unsigned: true, nullable: true})
  servings: number | null;

  @Column({type: 'int', unsigned: true, nullable: true})
  prep_time: number | null;

  @Column({type: 'int', unsigned: true, nullable: true})
  cook_time: number | null;

  @Column({type: 'int', unsigned: true, nullable: true})
  total_time: number | null;

  @Column({
    type: 'enum',
    enum: ['easy', 'medium', 'hard'],
    default: 'medium',
  })
  difficulty: 'easy' | 'medium' | 'hard';

  /* ===================== META ===================== */

  @Column({type: 'varchar', length: 500, nullable: true})
  main_image_url: string | null;

  @Column({type: 'text', nullable: true})
  notes: string | null;

  @Column({type: 'text', nullable: true})
  tips: string | null;

  @Column({type: 'decimal', precision: 12, scale: 2, nullable: true})
  cost_estimate: string | null;

  @Column({type: 'decimal', precision: 3, scale: 2, default: 0})
  rating: string;

  @Column({type: 'int', unsigned: true, default: 0})
  times_made: number;

  @Column({type: 'varchar', length: 500, nullable: true})
  source: string | null;

  /* ===================== RELATIONS ===================== */

  @ManyToOne(() => ArtisanEntity, a => a.recipes, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'artisan_id'})
  artisan: ArtisanEntity;

  @ManyToOne(() => RecipeCategoryEntity, c => c.recipes, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({name: 'category_id'})
  category: RecipeCategoryEntity | null;

  @ManyToOne(() => RecipeVisibilityTypeEntity, v => v.recipes, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({name: 'visibility_id'})
  visibility: RecipeVisibilityTypeEntity;

  @OneToMany(() => RecipeIngredientEntity, i => i.recipe)
  ingredients: RecipeIngredientEntity[];

  @OneToMany(() => RecipeInstructionEntity, i => i.recipe)
  instructions: RecipeInstructionEntity[];

  @OneToMany(() => RecipeImageEntity, i => i.recipe)
  images: RecipeImageEntity[];

  @OneToMany(() => RecipeTagRelationEntity, t => t.recipe)
  tag_relations: RecipeTagRelationEntity[];

  @OneToMany(() => RecipeVersionEntity, v => v.recipe)
  versions: RecipeVersionEntity[];

  @OneToMany(() => RecipeSharedWithEntity, s => s.recipe)
  shared_with: RecipeSharedWithEntity[];
}

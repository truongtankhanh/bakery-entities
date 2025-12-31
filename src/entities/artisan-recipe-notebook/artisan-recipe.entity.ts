import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, Index, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

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
@Index(['artisan'])
@Index(['visibility'])
@Index(['category'])
export class ArtisanRecipeEntity extends BaseEntity {
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

  /* ===================== BASIC INFO ===================== */

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

  @OneToMany(() => RecipeIngredientEntity, i => i.recipe, {lazy: true})
  ingredients: Promise<RecipeIngredientEntity[]>;

  @OneToMany(() => RecipeInstructionEntity, i => i.recipe, {lazy: true})
  instructions: Promise<RecipeInstructionEntity[]>;

  @OneToMany(() => RecipeImageEntity, i => i.recipe, {lazy: true})
  images: Promise<RecipeImageEntity[]>;

  @OneToMany(() => RecipeTagRelationEntity, t => t.recipe, {lazy: true})
  tag_relations: Promise<RecipeTagRelationEntity[]>;

  @OneToMany(() => RecipeVersionEntity, v => v.recipe, {lazy: true})
  versions: Promise<RecipeVersionEntity[]>;

  @OneToMany(() => RecipeSharedWithEntity, s => s.recipe, {lazy: true})
  shared_with: Promise<RecipeSharedWithEntity[]>;
}

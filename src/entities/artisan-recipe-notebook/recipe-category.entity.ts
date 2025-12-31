import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, Index, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

import {ArtisanRecipeEntity} from './artisan-recipe.entity';

@Entity('recipe_categories')
@Index(['parent_id', 'name'], {unique: true})
@Index(['parent_id'])
export class RecipeCategoryEntity extends BaseEntity {
  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'smallint', unsigned: true, nullable: true})
  parent_id: number | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  /* ===================== SELF REFERENCE ===================== */

  @ManyToOne(() => RecipeCategoryEntity, c => c.children, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({name: 'parent_id'})
  parent: RecipeCategoryEntity | null;

  @OneToMany(() => RecipeCategoryEntity, c => c.parent, {lazy: true})
  children: Promise<RecipeCategoryEntity[]>;

  /* ===================== FK ===================== */

  @OneToMany(() => ArtisanRecipeEntity, r => r.category, {
    lazy: true,
  })
  recipes: Promise<ArtisanRecipeEntity[]>;
}

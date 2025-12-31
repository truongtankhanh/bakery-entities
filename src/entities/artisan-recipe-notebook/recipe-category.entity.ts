import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

import {ArtisanRecipeEntity} from './artisan-recipe.entity';

@Entity('recipe_categories')
export class RecipeCategoryEntity extends BaseEntity {
  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'smallint', unsigned: true, nullable: true})
  parent_id: number | null;

  @Column({type: 'tinyint', default: true})
  is_active: number;

  /* ===================== SELF REFERENCE ===================== */

  @ManyToOne(() => RecipeCategoryEntity, c => c.children, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({name: 'parent_id'})
  parent: RecipeCategoryEntity | null;

  @OneToMany(() => RecipeCategoryEntity, c => c.parent)
  children: RecipeCategoryEntity[];

  /* ===================== FK ===================== */

  @OneToMany(() => ArtisanRecipeEntity, r => r.category)
  recipes: ArtisanRecipeEntity[];
}

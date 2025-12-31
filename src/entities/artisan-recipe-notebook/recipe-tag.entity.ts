import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {RecipeTagRelationEntity} from './recipe-tag-relation.entity';

@Entity('recipe_tags')
export class RecipeTagEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'tinyint', default: 1})
  is_active: number;

  @OneToMany(() => RecipeTagRelationEntity, object => object.tag)
  tag_relations: RecipeTagRelationEntity[];
}

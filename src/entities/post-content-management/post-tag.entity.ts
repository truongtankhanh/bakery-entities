import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {PostTagRelationEntity} from './post-tag-relation.entity';

@Entity('post_tags')
export class PostTagEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'tinyint', default: 1})
  is_active: number;

  @OneToMany(() => PostTagRelationEntity, rel => rel.tag)
  post_tag_relations: PostTagRelationEntity[];
}

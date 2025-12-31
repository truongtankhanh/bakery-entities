import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {PostTagRelationEntity} from './post-tag-relation.entity';

@Entity('post_tags')
export class PostTagEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100, unique: true})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => PostTagRelationEntity, rel => rel.tag)
  post_tag_relations: PostTagRelationEntity[];
}

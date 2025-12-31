import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {PostTagEntity} from './post-tag.entity';
import {PostEntity} from './post.entity';

@Entity('post_tag_relations')
export class PostTagRelationEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  post_id: number;

  @Column({type: 'smallint', unsigned: true})
  tag_id: number;

  @ManyToOne(() => PostEntity, post => post.post_tag_relations, {
    nullable: false,
    onDelete: 'CASCADE', // xoá post → xoá relation
  })
  @JoinColumn({name: 'post_id'})
  post: PostEntity;

  @ManyToOne(() => PostTagEntity, tag => tag.post_tag_relations, {
    nullable: false,
    onDelete: 'RESTRICT', // không cho xoá tag nếu đang dùng
  })
  @JoinColumn({name: 'tag_id'})
  tag: PostTagEntity;
}

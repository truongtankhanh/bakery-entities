import {BaseEntity} from '../../base/base.entity';
import {Entity, Index, JoinColumn, ManyToOne} from 'typeorm';

import {PostTagEntity} from './post-tag.entity';
import {PostEntity} from './post.entity';

@Entity('post_tag_relations')
@Index(['post', 'tag'], {unique: true})
export class PostTagRelationEntity extends BaseEntity {
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

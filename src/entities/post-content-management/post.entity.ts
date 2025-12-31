import {BaseEntity} from '../../base/base.entity';
import {UserEntity} from '../users-management/user.entity';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

import {PostCategoryEntity} from './post-category.entity';
import {PostStatusEntity} from './post-status.entity';
import {PostTagRelationEntity} from './post-tag-relation.entity';

@Entity('posts')
export class PostEntity extends BaseEntity {
  /* =====================
   * CONTENT
   * ===================== */

  @Column({type: 'varchar', length: 255})
  title: string;

  @Column({type: 'text', nullable: true})
  excerpt: string | null;

  @Column({type: 'longtext'})
  content: string;

  /* =====================
   * FLAGS & COUNTERS
   * ===================== */

  @Column({type: 'tinyint', default: 1})
  is_public: number;

  @Column({type: 'tinyint', default: 0})
  featured: number;

  @Column({type: 'int', unsigned: true, default: 0})
  view_count: number;

  @Column({type: 'int', unsigned: true, default: 0})
  comment_count: number;

  @Column({type: 'tinyint', default: 1})
  allow_comments: number;

  /* =====================
   * RELATIONS
   * ===================== */

  @Column({type: 'int', unsigned: true})
  author_id: number;

  @Column({type: 'int', unsigned: true, nullable: true})
  category_id: number | null;

  @Column({type: 'int', unsigned: true})
  status_id: number;

  @ManyToOne(() => UserEntity, user => user.posts, {
    nullable: false,
    onDelete: 'CASCADE', // xoá user → xoá post
  })
  @JoinColumn({name: 'author_id'})
  author: UserEntity;

  @ManyToOne(() => PostCategoryEntity, category => category.posts, {
    nullable: true,
    onDelete: 'SET NULL', // xoá category → post vẫn tồn tại
  })
  @JoinColumn({name: 'category_id'})
  category: PostCategoryEntity | null;

  @ManyToOne(() => PostStatusEntity, status => status.posts, {
    nullable: false,
    onDelete: 'RESTRICT', // không cho xoá status nếu còn post
  })
  @JoinColumn({name: 'status_id'})
  status: PostStatusEntity;

  @OneToMany(() => PostTagRelationEntity, rel => rel.post)
  post_tag_relations: PostTagRelationEntity[];
}

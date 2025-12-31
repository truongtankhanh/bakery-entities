import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

import {PostEntity} from './post.entity';

@Entity('post_categories')
export class PostCategoryEntity extends BaseEntity {
  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @ManyToOne(() => PostCategoryEntity, object => object.children, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({name: 'parent_id'})
  parent: PostCategoryEntity | null;

  @OneToMany(() => PostCategoryEntity, object => object.parent)
  children: PostCategoryEntity[];

  @OneToMany(() => PostEntity, object => object.category)
  posts: PostEntity[];
}

import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

import {PostEntity} from './post.entity';

@Entity('post_categories')
export class PostCategoryEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'tinyint', default: 1})
  is_active: number;

  @Column({type: 'int', unsigned: true, nullable: true})
  parent_id: number | null;

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

import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

import {CakeEntity} from './cake.entity';

@Entity('cake_categories')
export class CakeCategoryEntity extends BaseEntity {
  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'int', unsigned: true, nullable: true})
  parent_id: number | null;

  @Column({type: 'tinyint', default: true})
  is_active: number;

  // Quan hệ self-reference: parent
  @ManyToOne(() => CakeCategoryEntity, object => object.children, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({name: 'parent_id'})
  parent: CakeCategoryEntity | null;

  // Quan hệ self-reference: children
  @OneToMany(() => CakeCategoryEntity, object => object.parent)
  children: CakeCategoryEntity[];

  @OneToMany(() => CakeEntity, object => object.cake_category)
  cakes: CakeEntity[];
}

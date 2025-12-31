import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {CakeEntity} from './cake.entity';

@Entity('cake_types')
export class CakeTypeEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'tinyint', default: true})
  is_active: number;

  @OneToMany(() => CakeEntity, object => object.cake_type)
  cakes: CakeEntity[];
}

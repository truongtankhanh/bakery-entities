import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {CakeEntity} from './cake.entity';

@Entity('cake_types')
export class CakeTypeEntity extends BaseEntity {
  @Column({type: 'varchar', length: 50, unique: true})
  code: string;

  @Column({type: 'varchar', length: 100})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @OneToMany(() => CakeEntity, object => object.cake_type)
  cakes: CakeEntity[];
}

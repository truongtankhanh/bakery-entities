import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {SpecialtyEntity} from './specialty.entity';

@Entity('specialty_statuses')
export class SpecialtyStatusEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'tinyint', default: true})
  is_active: number;

  @OneToMany(() => SpecialtyEntity, object => object.status)
  specialties: SpecialtyEntity[];
}

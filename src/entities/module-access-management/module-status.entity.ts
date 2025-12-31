import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {ModuleEntity} from './module.entity';

@Entity('module_statuses')
export class ModuleStatusEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'tinyint', width: 1, default: 1})
  is_active: number;

  @OneToMany(() => ModuleEntity, module => module.status)
  modules: ModuleEntity[];
}

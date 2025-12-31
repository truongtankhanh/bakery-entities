import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

import {ModuleStatusEntity} from './module-status.entity';
import {UserModuleAccessEntity} from './user-module-access.entity';

@Entity('modules')
export class ModuleEntity extends BaseEntity {
  @Column({type: 'varchar', length: 50})
  code: string;

  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'varchar', length: 100, nullable: true})
  icon: string | null;

  @Column({type: 'tinyint', unsigned: true, default: 1})
  status_id: number;

  @Column({type: 'tinyint', default: 1})
  is_system: number;

  @ManyToOne(() => ModuleStatusEntity, object => object.modules)
  @JoinColumn({name: 'status_id'})
  status: ModuleStatusEntity;

  @OneToMany(() => UserModuleAccessEntity, object => object.module)
  module_accesses: UserModuleAccessEntity[];
}

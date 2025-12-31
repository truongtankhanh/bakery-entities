import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

import {ModuleStatusEntity} from './module-status.entity';
import {UserModuleAccessEntity} from './user-module-access.entity';

@Entity('modules')
export class ModuleEntity extends BaseEntity {
  @Column({type: 'varchar', length: 50, unique: true})
  code: string;

  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'varchar', length: 100, nullable: true})
  icon: string | null;

  @Column({type: 'smallint', unsigned: true, default: 0})
  sort_order: number;

  @Column({type: 'tinyint', unsigned: true, default: 1})
  status_id: number;

  @Column({type: 'boolean', default: true})
  is_system: boolean;

  @ManyToOne(() => ModuleStatusEntity, object => object.modules)
  @JoinColumn({name: 'status_id'})
  status: ModuleStatusEntity;

  @OneToMany(() => UserModuleAccessEntity, object => object.module)
  module_accesses: UserModuleAccessEntity[];
}

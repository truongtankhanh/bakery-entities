import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {UserModuleAccessEntity} from './user-module-access.entity';

@Entity('module_permissions')
export class ModulePermissionEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'tinyint', default: 1})
  is_active: number;

  @OneToMany(() => UserModuleAccessEntity, object => object.permission)
  module_accesses: UserModuleAccessEntity[];
}

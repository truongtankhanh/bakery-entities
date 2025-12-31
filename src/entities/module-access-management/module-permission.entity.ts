import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {UserModuleAccessEntity} from './user-module-access.entity';

@Entity('module_permissions')
export class ModulePermissionEntity extends BaseEntity {
  @Column({type: 'varchar', length: 50, unique: true})
  code: string;

  @Column({type: 'varchar', length: 100})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @OneToMany(() => UserModuleAccessEntity, object => object.permission)
  module_accesses: UserModuleAccessEntity[];
}

import {BaseEntity} from '../../base/base.entity';
import {UserEntity} from '../users-management';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {ModulePermissionEntity} from './module-permission.entity';
import {ModuleEntity} from './module.entity';

@Entity('user_module_access')
export class UserModuleAccessEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  user_id: number;

  @Column({type: 'smallint', unsigned: true})
  module_id: number;

  @Column({type: 'smallint', unsigned: true})
  permission_id: number;

  @Column({type: 'int', unsigned: true, nullable: true})
  granted_by: number | null;

  @Column({type: 'timestamp'})
  granted_at: Date;

  @Column({type: 'timestamp', nullable: true})
  expires_at: Date | null;

  @ManyToOne(() => UserEntity, object => object.module_accesses)
  @JoinColumn({name: 'user_id'})
  user: UserEntity;

  @ManyToOne(() => ModuleEntity, object => object.module_accesses)
  @JoinColumn({name: 'module_id'})
  module: ModuleEntity;

  @ManyToOne(() => ModulePermissionEntity, object => object.module_accesses)
  @JoinColumn({name: 'permission_id'})
  permission: ModulePermissionEntity;

  @ManyToOne(() => UserEntity, object => object.granted_module_accesses, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({name: 'granted_by'})
  granted_user: UserEntity;
}

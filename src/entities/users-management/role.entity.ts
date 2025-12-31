import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, Index, OneToMany} from 'typeorm';

import {UserRoleEntity} from './user_role.entity';

@Entity('roles')
@Index(['name'], {unique: true})
export class RoleEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  name: string;

  @Column({name: 'display_name', type: 'varchar', length: 255})
  display_name: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => UserRoleEntity, ur => ur.role, {lazy: true})
  user_roles: Promise<UserRoleEntity[]>;
}

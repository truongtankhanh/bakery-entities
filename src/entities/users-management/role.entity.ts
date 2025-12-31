import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {UserRoleEntity} from './user-role.entity';

@Entity('roles')
export class RoleEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'tinyint', default: true})
  is_active: number;

  @OneToMany(() => UserRoleEntity, ur => ur.role)
  user_roles: UserRoleEntity[];
}

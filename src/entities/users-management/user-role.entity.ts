import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {RoleEntity} from './role.entity';
import {UserEntity} from './user.entity';

@Entity('user_roles')
export class UserRoleEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  user_id: number;

  @Column({type: 'smallint', unsigned: true})
  role_id: number;

  @ManyToOne(() => UserEntity, user => user.user_roles, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'user_id'})
  user: UserEntity;

  @ManyToOne(() => RoleEntity, role => role.user_roles, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'role_id'})
  role: RoleEntity;
}

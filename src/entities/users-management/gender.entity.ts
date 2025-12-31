import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, Index, OneToMany} from 'typeorm';

import {UserEntity} from './user.entity';

@Entity('genders')
@Index(['code'], {unique: true})
export class GenderEntity extends BaseEntity {
  @Column({type: 'varchar', length: 20})
  code: string;

  @Column({type: 'varchar', length: 50})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => UserEntity, user => user.gender)
  users: UserEntity[];
}

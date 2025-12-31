import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, Index, OneToMany} from 'typeorm';

import {UserSessionEntity} from './user_session.entity';

@Entity('session_types')
@Index(['code'], {unique: true})
export class SessionTypeEntity extends BaseEntity {
  @Column({type: 'varchar', length: 50})
  code: string;

  @Column({type: 'varchar', length: 100})
  name: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => UserSessionEntity, us => us.session_type, {lazy: true})
  user_sessions: Promise<UserSessionEntity[]>;
}

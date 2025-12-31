import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, Index, JoinColumn, ManyToOne} from 'typeorm';

import {SessionTypeEntity} from './session_type.entity';
import {UserEntity} from './user.entity';

@Entity('user_sessions')
@Index(['user_id'])
@Index(['session_type_id'])
@Index(['expires_at'])
@Index(['token_hash'], {unique: true})
@Index(['refresh_token_hash'], {unique: true})
export class UserSessionEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  user_id: number;

  /* ===== TOKEN (HASHED) ===== */

  @Column({type: 'char', length: 64})
  token_hash: string;

  @Column({type: 'char', length: 64})
  refresh_token_hash: string;

  @Column({type: 'tinyint', unsigned: true, nullable: true})
  session_type_id: number | null;

  @Column({type: 'varchar', length: 45, nullable: true})
  ip_address: string | null;

  @Column({type: 'varchar', length: 500, nullable: true})
  user_agent: string | null;

  @Column({type: 'timestamp'})
  expires_at: Date;

  @Column({type: 'timestamp', nullable: true})
  revoked_at: Date | null;

  /* ===================== FK ===================== */

  @ManyToOne(() => UserEntity, u => u.user_sessions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'user_id'})
  user: UserEntity;

  @ManyToOne(() => SessionTypeEntity, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({name: 'session_type_id'})
  session_type: SessionTypeEntity;
}

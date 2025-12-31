import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {LogLevelEntity} from './log-level.entity';
import {BaseEntity} from '../../base/base.entity';
import {UserEntity} from '../users-management/user.entity';

@Entity('activity_logs')
export class ActivityLogEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true, nullable: true})
  user_id: number | null;

  @Column({type: 'varchar', length: 50})
  action: string;

  @Column({type: 'varchar', length: 100})
  module: string;

  @Column({type: 'tinyint', unsigned: true})
  level_id: number;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'json', nullable: true})
  metadata: Record<string, unknown> | null;

  @Column({type: 'varchar', length: 45, nullable: true})
  ip_address: string | null;

  @Column({type: 'varchar', length: 500, nullable: true})
  user_agent: string | null;

  @Column({
    name: 'logged_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  logged_at: Date;

  /* ===================== FK ===================== */

  @ManyToOne(() => UserEntity, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({name: 'user_id'})
  user: UserEntity | null;

  @ManyToOne(() => LogLevelEntity, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({name: 'level_id'})
  level: LogLevelEntity;
}

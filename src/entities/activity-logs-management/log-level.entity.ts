import {Column, Entity, Index, OneToMany} from 'typeorm';

import {ActivityLogEntity} from './activity-log.entity';
import {BaseEntity} from '../../base/base.entity';

@Entity('log_levels')
@Index(['code'], {unique: true})
export class LogLevelEntity extends BaseEntity {
  @Column({type: 'varchar', length: 50})
  code: string;

  @Column({type: 'varchar', length: 100})
  name: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => ActivityLogEntity, log => log.level, {lazy: true})
  activity_logs: Promise<ActivityLogEntity[]>;
}

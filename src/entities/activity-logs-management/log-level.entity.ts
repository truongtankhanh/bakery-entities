import {Column, Entity, OneToMany} from 'typeorm';

import {ActivityLogEntity} from './activity-log.entity';
import {BaseEntity} from '../../base/base.entity';

@Entity('log_levels')
export class LogLevelEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => ActivityLogEntity, log => log.level, {lazy: true})
  activity_logs: Promise<ActivityLogEntity[]>;
}

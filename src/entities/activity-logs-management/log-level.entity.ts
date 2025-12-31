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

  @Column({type: 'tinyint', default: true})
  is_active: number;

  @OneToMany(() => ActivityLogEntity, log => log.level)
  activity_logs: ActivityLogEntity[];
}

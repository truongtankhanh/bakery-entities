import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {StoreOperatingHourEntity} from './store-operating-hour.entity';

@Entity('weekdays')
export class WeekdayEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'tinyint', default: 1})
  is_active: number;

  @OneToMany(() => StoreOperatingHourEntity, object => object.weekday)
  operating_hours: StoreOperatingHourEntity[];
}

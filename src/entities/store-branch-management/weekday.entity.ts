import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {StoreOperatingHourEntity} from './store-operating-hour.entity';

@Entity('weekdays')
export class WeekdayEntity extends BaseEntity {
  @Column({type: 'varchar', length: 20, unique: true})
  code: string;

  @Column({type: 'varchar', length: 50})
  name: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => StoreOperatingHourEntity, object => object.weekday)
  operating_hours: StoreOperatingHourEntity[];
}

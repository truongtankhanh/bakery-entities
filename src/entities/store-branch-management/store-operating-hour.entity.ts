import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {StoreEntity} from './store.entity';
import {WeekdayEntity} from './weekday.entity';

@Entity('store_operating_hours')
export class StoreOperatingHourEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  store_id: number;

  @Column({type: 'tinyint', unsigned: true})
  weekday_id: number;

  @Column({type: 'time', nullable: true})
  open_time: string | null;

  @Column({type: 'time', nullable: true})
  close_time: string | null;

  @Column({type: 'tinyint', default: 0})
  is_closed: number;

  @Column({type: 'varchar', length: 255, nullable: true})
  special_note: string | null;

  /* ===================== Relations ===================== */

  @ManyToOne(() => StoreEntity, object => object.operating_hours, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'store_id'})
  store: StoreEntity;

  @ManyToOne(() => WeekdayEntity, object => object.operating_hours, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({name: 'weekday_id'})
  weekday: WeekdayEntity;
}

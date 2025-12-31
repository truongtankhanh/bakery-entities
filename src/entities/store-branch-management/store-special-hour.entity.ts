import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {StoreEntity} from './store.entity';

@Entity('store_special_hours')
export class StoreSpecialHourEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  store_id: number;

  @Column({type: 'date'})
  date: string;

  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'time', nullable: true})
  open_time: string | null;

  @Column({type: 'time', nullable: true})
  close_time: string | null;

  @Column({type: 'tinyint', default: 0})
  is_closed: number;

  @Column({type: 'text', nullable: true})
  description: string | null;

  /* ===================== Relations ===================== */

  @ManyToOne(() => StoreEntity, object => object.special_hours, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'store_id'})
  store: StoreEntity;
}

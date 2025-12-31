import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {StoreEntity} from './store.entity';

@Entity('store_phones')
export class StorePhoneEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  store_id: number;

  @Column({type: 'varchar', length: 20})
  phone: string;

  @Column({
    type: 'enum',
    enum: ['main', 'hotline', 'support', 'fax', 'other'],
    default: 'other',
  })
  type: 'main' | 'hotline' | 'support' | 'fax' | 'other';

  @Column({type: 'tinyint', default: 0})
  is_primary: number;

  @Column({type: 'int', unsigned: true, default: 0})
  display_order: number;

  /* ===================== Relations ===================== */

  @ManyToOne(() => StoreEntity, object => object.phones, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'store_id'})
  store: StoreEntity;
}

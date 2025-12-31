import {BaseEntity} from '../../base/base.entity';
import {CakeEntity} from '../cake-product-management';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {StoreEntity} from './store.entity';

@Entity('store_inventory')
export class StoreInventoryEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  store_id: number;

  @Column({type: 'int', unsigned: true})
  cake_id: number;

  @Column({type: 'int', unsigned: true, default: 0})
  quantity: number;

  @Column({type: 'int', unsigned: true, default: 0})
  reserved_quantity: number;

  @Column({type: 'int', unsigned: true, nullable: true})
  min_stock: number | null;

  @Column({type: 'int', unsigned: true, nullable: true})
  max_stock: number | null;

  @Column({type: 'timestamp', nullable: true})
  last_restock_at: Date | null;

  /* ===================== Relations ===================== */

  @ManyToOne(() => StoreEntity, object => object.inventory, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'store_id'})
  store: StoreEntity;

  @ManyToOne(() => CakeEntity, object => object.inventory, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'cake_id'})
  cake: CakeEntity;
}

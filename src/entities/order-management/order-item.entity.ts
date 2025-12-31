import {BaseEntity} from '../../base/base.entity';
import {CakeEntity} from '../cake-product-management/cake.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {OrderEntity} from './order.entity';

@Entity('order_items')
export class OrderItemEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  order_id: number;

  @Column({type: 'int', unsigned: true})
  cake_id: number;

  @Column({type: 'decimal', precision: 15, scale: 2})
  unit_price: number;

  @Column({type: 'int', unsigned: true, default: 1})
  quantity: number;

  @Column({type: 'decimal', precision: 15, scale: 2, default: 0})
  discount_amount: number;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @ManyToOne(() => OrderEntity, order => order.order_items)
  @JoinColumn({name: 'order_id'})
  order: OrderEntity;

  @ManyToOne(() => CakeEntity, cake => cake.order_items)
  @JoinColumn({name: 'cake_id'})
  cake: CakeEntity;
}

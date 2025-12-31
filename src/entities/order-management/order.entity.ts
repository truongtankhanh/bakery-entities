import {BaseEntity} from '../../base/base.entity';
import {OrderDiscountEntity} from '../discount-voucher-management';
import {PaymentMethodEntity, PaymentStatusEntity} from '../payment-management';
import {PaymentEntity} from '../payment-management';
import {UserEntity} from '../users-management';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

import {OrderItemEntity} from './order-item.entity';
import {OrderStatusEntity} from './order-status.entity';
import {ShippingMethodEntity} from './shipping-method.entity';

@Entity('orders')
export class OrderEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true, nullable: true})
  user_id: number;

  @Column({type: 'int', unsigned: true})
  payment_status_id: number;

  @Column({type: 'int', unsigned: true})
  payment_method_id: number;

  @Column({type: 'int', unsigned: true})
  order_status_id: number;

  @Column({type: 'int', unsigned: true})
  shipping_method_id: number;

  @Column({type: 'varchar', length: 50})
  order_code: string;

  @Column({type: 'decimal', precision: 15, scale: 2, default: 0})
  subtotal: number;

  @Column({type: 'decimal', precision: 15, scale: 2, default: 0})
  discount_amount: number;

  @Column({type: 'decimal', precision: 15, scale: 2, default: 0})
  shipping_fee: number;

  @Column({type: 'decimal', precision: 15, scale: 2})
  total_amount: number;

  @Column({type: 'varchar', length: 255})
  customer_name: string;

  @Column({type: 'varchar', length: 20})
  customer_phone: string;

  @Column({type: 'text'})
  shipping_address: string;

  @Column({type: 'text', nullable: true})
  customer_note: string | null;

  @ManyToOne(() => UserEntity, user => user.orders, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({name: 'user_id'})
  user: UserEntity | null;

  @ManyToOne(() => PaymentStatusEntity, object => object.orders)
  @JoinColumn({name: 'payment_status_id'})
  payment_status: PaymentStatusEntity;

  @ManyToOne(() => PaymentMethodEntity, object => object.orders)
  @JoinColumn({name: 'payment_method_id'})
  payment_method: PaymentMethodEntity;

  @ManyToOne(() => OrderStatusEntity, object => object.orders)
  @JoinColumn({name: 'order_status_id'})
  order_status: OrderStatusEntity;

  @ManyToOne(() => ShippingMethodEntity, object => object.orders)
  @JoinColumn({name: 'shipping_method_id'})
  shipping_method: ShippingMethodEntity;

  @OneToMany(() => OrderItemEntity, object => object.order)
  order_items: OrderItemEntity[];

  @OneToMany(() => PaymentEntity, object => object.order)
  payments: PaymentEntity[];

  @OneToMany(() => OrderDiscountEntity, object => object.order)
  order_discounts: OrderDiscountEntity[];
}

import {BaseEntity} from '../../base/base.entity';
import {OrderEntity} from '../order-management/order.entity';
import {Column, Entity, Index, OneToMany} from 'typeorm';

import {PaymentEntity} from './payment.entity';

@Entity('payment_statuses')
export class PaymentStatusEntity extends BaseEntity {
  @Column({type: 'varchar', length: 50, unique: true})
  code: string;

  @Column({type: 'varchar', length: 100})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'boolean', default: true})
  @Index()
  is_active: boolean;

  @OneToMany(() => PaymentEntity, object => object.order)
  payments: PaymentEntity[];

  @OneToMany(() => OrderEntity, object => object.order_status)
  orders: OrderEntity[];
}

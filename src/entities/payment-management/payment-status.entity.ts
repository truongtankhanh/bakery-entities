import {BaseEntity} from '../../base/base.entity';
import {OrderEntity} from '../order-management/order.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {PaymentEntity} from './payment.entity';

@Entity('payment_statuses')
export class PaymentStatusEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => PaymentEntity, object => object.payment_status)
  payments: PaymentEntity[];

  @OneToMany(() => OrderEntity, object => object.payment_status)
  orders: OrderEntity[];
}

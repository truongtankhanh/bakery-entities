import {BaseEntity} from '../../base/base.entity';
import {OrderEntity} from '../order-management/order.entity';
import {UserEntity} from '../users-management/user.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {PaymentMethodEntity} from './payment-method.entity';
import {PaymentStatusEntity} from './payment-status.entity';

@Entity('payments')
export class PaymentEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  order_id: number;

  @Column({type: 'int', unsigned: true, nullable: true})
  user_id: number | null;

  @Column({type: 'int', unsigned: true})
  payment_method_id: number;

  @Column({type: 'int', unsigned: true})
  payment_status_id: number;

  @Column({type: 'decimal', precision: 15, scale: 2})
  amount: number;

  @Column({type: 'varchar', length: 255, nullable: true})
  transaction_id: string | null;

  @Column({type: 'json', nullable: true})
  provider_response: object | null;

  @Column({type: 'timestamp', nullable: true})
  paid_at: Date | null;

  @ManyToOne(() => OrderEntity, order => order.payments, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'order_id'})
  order: OrderEntity;

  @ManyToOne(() => UserEntity, object => object.payments, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({name: 'user_id'})
  user: UserEntity | null;

  @ManyToOne(() => PaymentMethodEntity, method => method.payments, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({name: 'payment_method_id'})
  payment_method: PaymentMethodEntity;

  @ManyToOne(() => PaymentStatusEntity, status => status.payments, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({name: 'payment_status_id'})
  payment_status: PaymentStatusEntity;
}

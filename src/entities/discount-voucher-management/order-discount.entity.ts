import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {DiscountEntity} from './discount.entity';
import {VoucherCodeEntity} from './voucher-code.entity';
import {OrderEntity} from '../order-management';

@Entity('order_discounts')
export class OrderDiscountEntity extends BaseEntity {
  @Column({type: 'varchar', length: 150, nullable: true})
  code: string | null;

  @Column({
    type: 'enum',
    enum: ['percent', 'fixed', 'shipping'],
    nullable: true,
  })
  discount_type: 'percent' | 'fixed' | 'shipping' | null;

  @Column({type: 'decimal', precision: 12, scale: 2, nullable: true})
  discount_value: string | null;

  @Column({type: 'decimal', precision: 12, scale: 2})
  discount_amount: string;

  @Column({type: 'int', unsigned: true})
  order_id: number;

  @Column({type: 'int', unsigned: true, nullable: true})
  discount_id: number | null;

  @Column({type: 'int', unsigned: true, nullable: true})
  voucher_code_id: number | null;

  @ManyToOne(() => OrderEntity, order => order.order_discounts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'order_id'})
  order: OrderEntity;

  @ManyToOne(() => DiscountEntity, discount => discount.order_discounts, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({name: 'discount_id'})
  discount: DiscountEntity | null;

  @ManyToOne(() => VoucherCodeEntity, voucher => voucher.order_discounts, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({name: 'voucher_code_id'})
  voucher: VoucherCodeEntity | null;
}

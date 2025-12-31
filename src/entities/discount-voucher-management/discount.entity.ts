import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {DiscountCakeRelationEntity} from './discount-cake-relation.entity';
import {DiscountUserRelationEntity} from './discount-user-relation.entity';
import {OrderDiscountEntity} from './order-discount.entity';
import {VoucherCodeEntity} from './voucher-code.entity';

@Entity('discounts')
export class DiscountEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'enum', enum: ['percent', 'fixed', 'shipping']})
  discount_type: 'percent' | 'fixed' | 'shipping';

  @Column({type: 'decimal', precision: 12, scale: 2})
  discount_value: string;

  @Column({type: 'decimal', precision: 12, scale: 2, nullable: true})
  max_discount_amount: string | null;

  @Column({type: 'decimal', precision: 12, scale: 2, nullable: true})
  minimum_order_amount: string | null;

  @Column({type: 'int', unsigned: true, nullable: true})
  usage_limit: number | null;

  @Column({type: 'int', unsigned: true, nullable: true})
  usage_limit_per_user: number | null;

  @Column({type: 'timestamp'})
  start_date: Date;

  @Column({type: 'timestamp'})
  end_date: Date;

  @Column({type: 'tinyint', width: 1, default: 1})
  is_active: number;

  @OneToMany(() => VoucherCodeEntity, object => object.discount)
  voucher_codes: VoucherCodeEntity[];

  @OneToMany(() => OrderDiscountEntity, object => object.discount)
  order_discounts: OrderDiscountEntity[];

  @OneToMany(() => DiscountCakeRelationEntity, object => object.discount)
  discount_cake_relations: DiscountCakeRelationEntity[];

  @OneToMany(() => DiscountUserRelationEntity, object => object.discount)
  discount_user_relations: DiscountUserRelationEntity[];
}

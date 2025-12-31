import {BaseEntity} from '../../base/base.entity';
import {UserEntity} from '../users-management';
import {Column, Entity, Index, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

import {DiscountEntity} from './discount.entity';
import {OrderDiscountEntity} from './order-discount.entity';

@Entity('voucher_codes')
@Index('idx_voucher_code', ['code'])
@Index('idx_voucher_discount', ['discount_id'])
@Index('idx_voucher_used', ['is_used'])
@Index('idx_voucher_user', ['used_by'])
export class VoucherCodeEntity extends BaseEntity {
  @Column({type: 'varchar', length: 150, unique: true})
  code: string;

  @Column({type: 'varchar', length: 100, nullable: true})
  batch: string | null;

  @Column({type: 'boolean', default: false})
  is_used: boolean;

  @Column({type: 'int', unsigned: true, nullable: true})
  used_by: number | null;

  @Column({type: 'timestamp', nullable: true})
  used_at: Date | null;

  @Column({type: 'timestamp', nullable: true})
  expires_at: Date | null;

  @Column({type: 'int', unsigned: true})
  discount_id: number;

  @ManyToOne(() => DiscountEntity, discount => discount.voucher_codes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'discount_id'})
  discount: DiscountEntity;

  @ManyToOne(() => UserEntity, user => user.voucher_codes, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({name: 'used_by'})
  user: UserEntity | null;

  @OneToMany(() => OrderDiscountEntity, object => object.order)
  order_discounts: OrderDiscountEntity[];
}

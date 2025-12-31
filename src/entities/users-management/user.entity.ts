import {BaseEntity} from '../../base/base.entity';
import {ActivityLogEntity} from '../activity-logs-management';
import {AddressEntity} from '../address-management';
import {ArtisanEntity} from '../artisan-management';
import {DiscountUserRelationEntity} from '../discount-voucher-management';
import {VoucherCodeEntity} from '../discount-voucher-management';
import {UserModuleAccessEntity} from '../module-access-management';
import {OrderEntity} from '../order-management';
import {PaymentEntity} from '../payment-management';
import {PostEntity} from '../post-content-management';
import {ReviewEntity} from '../review-rating-management';
import {ShoppingCartEntity} from '../shopping-cart-management';
import {StoreEntity} from '../store-branch-management';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

import {GenderEntity} from './gender.entity';
import {UserRoleEntity} from './user-role.entity';
import {UserSessionEntity} from './user-session.entity';
import {UserStatusEntity} from './user-status.entity';
import {UserTwoFactorAuthEntity} from './user-two-factor-auth.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  /* ================= BASIC ================= */

  @Column({type: 'varchar', length: 255})
  email: string;

  @Column({type: 'varchar', length: 255})
  password_hash: string;

  @Column({type: 'varchar', length: 255})
  full_name: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  avatar_url: string | null;

  @Column({type: 'varchar', length: 20, nullable: true})
  phone_number: string | null;

  @Column({type: 'date', nullable: true})
  date_of_birth: string | null;

  @Column({type: 'tinyint', default: false})
  is_super_admin: number;

  @Column({type: 'tinyint', default: false})
  must_change_password: number;

  @Column({type: 'int', default: 1})
  session_version: number;

  /* ================= GENDER ================= */

  @Column({name: 'gender_id', type: 'tinyint', unsigned: true, nullable: true})
  gender_id: number | null;

  @ManyToOne(() => GenderEntity, {
    nullable: true,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({name: 'gender_id'})
  gender: GenderEntity | null;

  /* ================= STATUS ================= */

  @Column({
    name: 'status_id',
    type: 'tinyint',
    unsigned: true,
  })
  status_id: number;

  @ManyToOne(() => UserStatusEntity, {
    nullable: false,
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({name: 'status_id'})
  status: UserStatusEntity;

  /* ================= RELATIONS ================= */

  @OneToMany(() => UserRoleEntity, r => r.user)
  user_roles: UserRoleEntity[];

  @OneToMany(() => UserSessionEntity, s => s.user)
  user_sessions: UserSessionEntity[];

  @OneToMany(() => UserTwoFactorAuthEntity, t => t.user)
  user_two_factor_auths: UserTwoFactorAuthEntity[];

  @OneToMany(() => ActivityLogEntity, l => l.user)
  activity_logs: ActivityLogEntity[];

  @OneToMany(() => PostEntity, p => p.author)
  posts: PostEntity[];

  @OneToOne(() => ArtisanEntity, a => a.user)
  artisan: ArtisanEntity;

  @OneToMany(() => OrderEntity, o => o.user)
  orders: OrderEntity[];

  @OneToMany(() => PaymentEntity, object => object.order)
  payments: PaymentEntity[];

  @OneToMany(() => ShoppingCartEntity, object => object.user)
  shopping_carts: ShoppingCartEntity[];

  @OneToMany(() => AddressEntity, object => object.user)
  addresses: AddressEntity[];

  @OneToMany(() => ReviewEntity, object => object.user)
  reviews: ReviewEntity[];

  @OneToMany(() => VoucherCodeEntity, object => object.user)
  voucher_codes: VoucherCodeEntity[];

  @OneToMany(() => DiscountUserRelationEntity, object => object.user)
  discount_user_relations: DiscountUserRelationEntity[];

  @OneToMany(() => StoreEntity, object => object.manager)
  stores: StoreEntity[];

  @OneToMany(() => UserModuleAccessEntity, object => object.user)
  module_accesses: UserModuleAccessEntity[];

  @OneToMany(() => UserModuleAccessEntity, object => object.granted_user)
  granted_module_accesses: UserModuleAccessEntity[];
}

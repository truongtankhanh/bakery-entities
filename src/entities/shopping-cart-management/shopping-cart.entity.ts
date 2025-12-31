import {BaseEntity} from '../../base/base.entity';
import {UserEntity} from '../users-management/user.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {ShoppingCartStatusEntity} from './shopping-cart-status.entity';

@Entity('shopping_cart')
export class ShoppingCartEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true, default: 0})
  total_items: number;

  @Column({type: 'int', unsigned: true, default: 0})
  total_quantity: number;

  @Column({type: 'int', unsigned: true})
  user_id: number;

  @Column({type: 'tinyint', unsigned: true})
  status_id: number;

  @ManyToOne(() => UserEntity, user => user.shopping_carts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'user_id'})
  user: UserEntity;

  @ManyToOne(() => ShoppingCartStatusEntity, object => object.shopping_carts, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({name: 'status_id'})
  status: ShoppingCartStatusEntity;
}

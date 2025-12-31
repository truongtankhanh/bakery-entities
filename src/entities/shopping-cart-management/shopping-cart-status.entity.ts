import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {ShoppingCartEntity} from './shopping-cart.entity';

@Entity('shopping_cart_statuses')
export class ShoppingCartStatusEntity extends BaseEntity {
  @Column({type: 'varchar', length: 50, unique: true})
  code: string;

  @Column({type: 'varchar', length: 100})
  name: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => ShoppingCartEntity, object => object.user)
  shopping_carts: ShoppingCartEntity[];
}

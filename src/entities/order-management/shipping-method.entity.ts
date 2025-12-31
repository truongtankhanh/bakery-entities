import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {OrderEntity} from './order.entity';

@Entity('shipping_methods')
export class ShippingMethodEntity extends BaseEntity {
  @Column({type: 'varchar', length: 50, unique: true})
  code: string;

  @Column({type: 'varchar', length: 100})
  name: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => OrderEntity, order => order.shipping_method)
  orders: OrderEntity[];
}

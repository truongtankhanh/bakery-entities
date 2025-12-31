import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {DiscountEntity} from './discount.entity';
import {CakeEntity} from '../cake-product-management';

@Entity('discount_cake_relations')
export class DiscountCakeRelationEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  discount_id: number;

  @Column({type: 'int', unsigned: true})
  cake_id: number;

  @ManyToOne(
    () => DiscountEntity,
    discount => discount.discount_cake_relations,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({name: 'discount_id'})
  discount: DiscountEntity;

  @ManyToOne(() => CakeEntity, cake => cake.discount_cake_relations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'cake_id'})
  cake: CakeEntity;
}

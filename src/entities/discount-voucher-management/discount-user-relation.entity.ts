import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {DiscountEntity} from './discount.entity';
import {UserEntity} from '../users-management';

@Entity('discount_user_relations')
export class DiscountUserRelationEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  discount_id: number;

  @Column({type: 'int', unsigned: true})
  user_id: number;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  assigned_at: Date;

  @Column({type: 'timestamp', nullable: true})
  expires_at: Date | null;

  @ManyToOne(
    () => DiscountEntity,
    discount => discount.discount_user_relations,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({name: 'discount_id'})
  discount: DiscountEntity;

  @ManyToOne(() => UserEntity, user => user.discount_user_relations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'user_id'})
  user: UserEntity;
}

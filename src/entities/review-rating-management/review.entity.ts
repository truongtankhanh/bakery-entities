import {BaseEntity} from '../../base/base.entity';
import {CakeEntity} from '../cake-product-management';
import {UserEntity} from '../users-management/user.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

@Entity('reviews')
export class ReviewEntity extends BaseEntity {
  @Column({type: 'tinyint', unsigned: true})
  rating: number;

  @Column({type: 'varchar', length: 255, nullable: true})
  title: string | null;

  @Column({type: 'text', nullable: true})
  content: string | null;

  @Column({type: 'int', unsigned: true})
  user_id: number;

  @Column({type: 'int', unsigned: true})
  cake_id: number;

  @ManyToOne(() => UserEntity, user => user.reviews, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'user_id'})
  user: UserEntity;

  @ManyToOne(() => CakeEntity, cake => cake.reviews, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'cake_id'})
  cake: CakeEntity;
}

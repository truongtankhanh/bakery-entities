import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

import {CakeArtisanEntity} from './cake-artisan.entity';
import {CakeCategoryEntity} from './cake-category.entity';
import {CakeImageEntity} from './cake-image.entity';
import {CakeIngredientEntity} from './cake-ingredient.entity';
import {CakeTypeEntity} from './cake-type.entity';
import {DiscountCakeRelationEntity} from '../discount-voucher-management';
import {OrderItemEntity} from '../order-management';
import {ReviewEntity} from '../review-rating-management';
import {StoreInventoryEntity} from '../store-branch-management';

@Entity('cakes')
export class CakeEntity extends BaseEntity {
  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'tinyint', unsigned: true})
  type_id: number;

  @Column({type: 'int', unsigned: true, nullable: true})
  category_id: number | null;

  @Column({type: 'decimal', precision: 12, scale: 2})
  price: number;

  @Column({type: 'varchar', length: 500, nullable: true})
  thumbnail_url: string | null;

  @Column({type: 'int', unsigned: true, default: 0})
  stock_quantity: number;

  @Column({type: 'decimal', precision: 3, scale: 2, default: 0})
  rating: number;

  @Column({type: 'int', unsigned: true, default: 0})
  review_count: number;

  @Column({type: 'tinyint', width: 1, default: 1})
  is_active: number;

  @Column({type: 'tinyint', width: 1, default: 0})
  is_featured: number;

  @ManyToOne(() => CakeTypeEntity, object => object.cakes)
  @JoinColumn({name: 'type_id'})
  cake_type: CakeTypeEntity;

  @ManyToOne(() => CakeCategoryEntity, object => object.cakes)
  @JoinColumn({name: 'category_id'})
  cake_category: CakeCategoryEntity;

  @OneToMany(() => CakeImageEntity, object => object.cake)
  cake_images: CakeImageEntity[];

  @OneToMany(() => CakeIngredientEntity, object => object.cake)
  cake_ingredients: CakeIngredientEntity[];

  @OneToMany(() => CakeArtisanEntity, object => object.cake)
  cake_artisans: CakeArtisanEntity[];

  @OneToMany(() => OrderItemEntity, object => object.cake)
  order_items: OrderItemEntity[];

  @OneToMany(() => ReviewEntity, object => object.cake)
  reviews: ReviewEntity[];

  @OneToMany(() => DiscountCakeRelationEntity, object => object.cake)
  discount_cake_relations: DiscountCakeRelationEntity[];

  @OneToMany(() => StoreInventoryEntity, object => object.cake)
  inventory: StoreInventoryEntity[];
}

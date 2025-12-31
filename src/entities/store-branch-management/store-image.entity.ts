import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {StoreEntity} from './store.entity';

@Entity('store_images')
export class StoreImageEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  store_id: number;

  @Column({type: 'varchar', length: 500})
  image_url: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  caption: string | null;

  @Column({type: 'varchar', length: 50, nullable: true})
  image_type: string | null;

  @Column({type: 'tinyint', default: 0})
  is_featured: number;

  @Column({type: 'int', unsigned: true, default: 0})
  display_order: number;

  /* ===================== Relations ===================== */

  @ManyToOne(() => StoreEntity, object => object.images, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'store_id'})
  store: StoreEntity;
}

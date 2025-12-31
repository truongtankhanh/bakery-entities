import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, Index, JoinColumn, ManyToOne} from 'typeorm';

import {StoreEntity} from './store.entity';

@Entity('store_images')
@Index('idx_si_store', ['store_id'])
@Index('idx_si_featured', ['is_featured'])
export class StoreImageEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  store_id: number;

  @Column({type: 'varchar', length: 500})
  image_url: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  caption: string | null;

  @Column({type: 'varchar', length: 50, nullable: true})
  image_type: string | null;

  @Column({type: 'boolean', default: false})
  is_featured: boolean;

  @Column({type: 'int', unsigned: true, default: 0})
  display_order: number;

  /* ===================== Relations ===================== */

  @ManyToOne(() => StoreEntity, object => object.images, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'store_id'})
  store: StoreEntity;
}

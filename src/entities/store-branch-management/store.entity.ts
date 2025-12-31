import {BaseEntity} from '../../base/base.entity';
import {UserEntity} from '../users-management';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

import {StoreArtisanEntity} from './store-artisan.entity';
import {StoreImageEntity} from './store-image.entity';
import {StoreInventoryEntity} from './store-inventory.entity';
import {StoreOperatingHourEntity} from './store-operating-hour.entity';
import {StorePhoneEntity} from './store-phone.entity';
import {StoreSpecialHourEntity} from './store-special-hour.entity';
import {StoreStatusEntity} from './store-status.entity';

@Entity('stores')
export class StoreEntity extends BaseEntity {
  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'varchar', length: 50})
  code: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'varchar', length: 255, nullable: true})
  email: string | null;

  @Column({type: 'varchar', length: 255})
  address_line1: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  address_line2: string | null;

  @Column({type: 'varchar', length: 150, nullable: true})
  ward: string | null;

  @Column({type: 'varchar', length: 150, nullable: true})
  district: string | null;

  @Column({type: 'varchar', length: 150})
  city: string;

  @Column({type: 'varchar', length: 20, nullable: true})
  postal_code: string | null;

  @Column({type: 'decimal', precision: 10, scale: 8, nullable: true})
  latitude: number | null;

  @Column({type: 'decimal', precision: 11, scale: 8, nullable: true})
  longitude: number | null;

  @Column({type: 'varchar', length: 500, nullable: true})
  thumbnail_url: string | null;

  @Column({type: 'int', unsigned: true, nullable: true})
  manager_id: number | null;

  @Column({type: 'tinyint', unsigned: true, default: 1})
  status_id: number;

  @Column({type: 'boolean', default: false})
  is_main_store: boolean;

  @Column({type: 'int', unsigned: true, default: 0})
  display_order: number;

  @Column({type: 'date', nullable: true})
  opening_date: Date | null;

  @Column({type: 'varchar', length: 255, nullable: true})
  website_url: string | null;

  @Column({type: 'varchar', length: 255, nullable: true})
  facebook_url: string | null;

  @Column({type: 'varchar', length: 255, nullable: true})
  instagram_url: string | null;

  @Column({type: 'varchar', length: 500, nullable: true})
  google_map_url: string | null;

  @Column({type: 'json', nullable: true})
  special_features: Record<string, unknown> | null;

  /* ===================== Relations ===================== */

  @ManyToOne(() => UserEntity, object => object.stores, {nullable: true})
  @JoinColumn({name: 'manager_id'})
  manager: UserEntity | null;

  @ManyToOne(() => StoreStatusEntity, object => object.stores)
  @JoinColumn({name: 'status_id'})
  status: StoreStatusEntity;

  @OneToMany(() => StorePhoneEntity, object => object.store)
  phones: StorePhoneEntity[];

  @OneToMany(() => StoreOperatingHourEntity, object => object.store)
  operating_hours: StoreOperatingHourEntity[];

  @OneToMany(() => StoreSpecialHourEntity, object => object.store)
  special_hours: StoreSpecialHourEntity[];

  @OneToMany(() => StoreImageEntity, object => object.store)
  images: StoreImageEntity[];

  @OneToMany(() => StoreArtisanEntity, object => object.store)
  artisans: StoreArtisanEntity[];

  @OneToMany(() => StoreInventoryEntity, object => object.store)
  inventory: StoreInventoryEntity[];
}

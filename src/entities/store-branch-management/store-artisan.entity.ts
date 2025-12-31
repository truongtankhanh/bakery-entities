import {BaseEntity} from '../../base/base.entity';
import {ArtisanRoleEntity} from '../artisan-management/artisan-role.entity';
import {ArtisanEntity} from '../artisan-management/artisan.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {StoreEntity} from './store.entity';

@Entity('store_artisans')
export class StoreArtisanEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  store_id: number;

  @Column({type: 'int', unsigned: true})
  artisan_id: number;

  @Column({type: 'tinyint', unsigned: true, nullable: true})
  role_id: number | null;

  @Column({type: 'tinyint', default: 0})
  is_primary: number;

  @Column({type: 'date', nullable: true})
  start_date: string | null;

  @Column({type: 'date', nullable: true})
  end_date: string | null;

  /* ===================== Relations ===================== */

  @ManyToOne(() => StoreEntity, object => object.artisans, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'store_id'})
  store: StoreEntity;

  @ManyToOne(() => ArtisanEntity, object => object.artisans, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'artisan_id'})
  artisan: ArtisanEntity;

  @ManyToOne(() => ArtisanRoleEntity, object => object.artisans, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({name: 'role_id'})
  role: ArtisanRoleEntity | null;
}

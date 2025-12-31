import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {CakeEntity} from './cake.entity';
import {ArtisanProductStatusEntity} from './artisan-product-statuses.entity';
import {ArtisanEntity} from '../artisan-management';

@Entity('cake_artisans')
export class CakeArtisanEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  cake_id: number;

  @Column({type: 'int', unsigned: true, nullable: true})
  artisan_id: number | null;

  @Column({type: 'tinyint', unsigned: true, default: 1})
  status_id: number;

  @Column({type: 'tinyint', width: 1, default: 0})
  verified: number;

  @ManyToOne(() => CakeEntity, object => object.cake_artisans, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'cake_id'})
  cake: CakeEntity;

  @ManyToOne(() => ArtisanEntity, object => object.cake_artisans, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({name: 'artisan_id'})
  artisan: ArtisanEntity;

  @ManyToOne(() => ArtisanProductStatusEntity, object => object.cake_artisans, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({name: 'status_id'})
  status: ArtisanProductStatusEntity;
}

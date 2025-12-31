import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {CakeArtisanEntity} from './cake-artisan.entity';

@Entity('artisan_product_statuses')
export class ArtisanProductStatusEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'tinyint', default: true})
  is_active: number;

  @OneToMany(() => CakeArtisanEntity, object => object.status)
  cake_artisans: CakeArtisanEntity[];
}

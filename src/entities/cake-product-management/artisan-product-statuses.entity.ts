import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {CakeArtisanEntity} from './cake-artisan.entity';

@Entity('artisan_product_statuses')
export class ArtisanProductStatusEntity extends BaseEntity {
  @Column({type: 'varchar', length: 50, unique: true})
  code: string;

  @Column({type: 'varchar', length: 100})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => CakeArtisanEntity, object => object.status)
  cake_artisans: CakeArtisanEntity[];
}

import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {ArtisanEntity} from './artisan.entity';

@Entity('artisan_statuses')
export class ArtisanStatusEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'tinyint', default: true})
  is_active: number;

  @OneToMany(() => ArtisanEntity, object => object.status)
  artisans: ArtisanEntity[];
}

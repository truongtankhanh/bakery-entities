import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {ArtisanSpecialtyEntity} from './artisan-specialty.entity';

@Entity('artisan_specialty_levels')
export class ArtisanSpecialtyLevelEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'tinyint', default: true})
  is_active: number;

  @OneToMany(() => ArtisanSpecialtyEntity, object => object.level)
  artisan_specialties: ArtisanSpecialtyEntity[];
}

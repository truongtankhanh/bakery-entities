import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {ArtisanSpecialtyEntity} from './artisan-specialty.entity';

@Entity('artisan_specialty_levels')
export class ArtisanSpecialtyLevelEntity extends BaseEntity {
  @Column({type: 'varchar', length: 50, unique: true})
  code: string;

  @Column({type: 'varchar', length: 100})
  name: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => ArtisanSpecialtyEntity, object => object.level)
  artisan_specialties: ArtisanSpecialtyEntity[];
}

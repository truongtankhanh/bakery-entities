import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {ArtisanSpecialtyLevelEntity} from './artisan-specialty-level.entity';
import {ArtisanSpecialtyStatusEntity} from './artisan-specialty-status.entity';
import {ArtisanEntity} from './artisan.entity';
import {SpecialtyEntity} from './specialty.entity';

@Entity('artisan_specialties')
export class ArtisanSpecialtyEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  artisan_id: number;

  @Column({type: 'smallint', unsigned: true})
  specialty_id: number;

  @Column({type: 'tinyint', unsigned: true, nullable: true})
  level_id: number | null;

  @Column({type: 'tinyint', width: 1, default: () => '0'})
  verified: number;

  @Column({type: 'tinyint', unsigned: true, default: () => '1'})
  status_id: number;

  /* ================= relations ================= */

  @ManyToOne(() => ArtisanEntity, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'artisan_id'})
  artisan: ArtisanEntity;

  @ManyToOne(() => SpecialtyEntity, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'specialty_id'})
  specialty: SpecialtyEntity;

  @ManyToOne(() => ArtisanSpecialtyLevelEntity, {onDelete: 'SET NULL'})
  @JoinColumn({name: 'level_id'})
  level: ArtisanSpecialtyLevelEntity | null;

  @ManyToOne(() => ArtisanSpecialtyStatusEntity, {onDelete: 'RESTRICT'})
  @JoinColumn({name: 'status_id'})
  status: ArtisanSpecialtyStatusEntity;
}

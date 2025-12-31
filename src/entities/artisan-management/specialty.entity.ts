import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

import {ArtisanSpecialtyEntity} from './artisan-specialty.entity';
import {SpecialtyStatusEntity} from './specialty-status.entity';

@Entity('specialties')
export class SpecialtyEntity extends BaseEntity {
  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'tinyint', unsigned: true, default: 1})
  status_id: number;

  @ManyToOne(() => SpecialtyStatusEntity, {onDelete: 'RESTRICT'})
  @JoinColumn({name: 'status_id'})
  status: SpecialtyStatusEntity;

  @OneToMany(() => ArtisanSpecialtyEntity, object => object.specialty)
  artisan_specialties: ArtisanSpecialtyEntity[];
}

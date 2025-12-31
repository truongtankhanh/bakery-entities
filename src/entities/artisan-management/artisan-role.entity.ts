import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';
import {StoreArtisanEntity} from '../store-branch-management/store-artisan.entity';

@Entity('artisan_roles')
export class ArtisanRoleEntity extends BaseEntity {
  @Column({type: 'varchar', length: 50, unique: true})
  code: string;

  @Column({type: 'varchar', length: 100})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => StoreArtisanEntity, object => object.store)
  artisans: StoreArtisanEntity[];
}

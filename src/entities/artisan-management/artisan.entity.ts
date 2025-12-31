import {BaseEntity} from '../../base/base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

import {ArtisanSpecialtyEntity} from './artisan-specialty.entity';
import {ArtisanStatusEntity} from './artisan-status.entity';
import {
  ArtisanRecipeEntity,
  RecipeSharedWithEntity,
} from '../artisan-recipe-notebook';
import {CakeArtisanEntity} from '../cake-product-management';
import {StoreArtisanEntity} from '../store-branch-management';
import {UserEntity} from '../users-management';

@Entity('artisans')
export class ArtisanEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true, nullable: true})
  user_id: number | null;

  @Column({type: 'varchar', length: 255})
  stage_name: string;

  @Column({type: 'int', unsigned: true, nullable: true})
  experience_years: number | null;

  @Column({type: 'text', nullable: true})
  bio: string | null;

  @Column({type: 'varchar', length: 255, nullable: true})
  location: string | null;

  @Column({type: 'decimal', precision: 3, scale: 2, default: 0})
  rating: number;

  @Column({type: 'int', unsigned: true, default: 0})
  rating_count: number;

  @Column({type: 'tinyint', unsigned: true, default: 1})
  status_id: number;

  @OneToOne(() => UserEntity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'user_id'})
  user: UserEntity | null;

  @ManyToOne(() => ArtisanStatusEntity, {onDelete: 'RESTRICT'})
  @JoinColumn({name: 'status_id'})
  status: ArtisanStatusEntity;

  @OneToMany(() => ArtisanSpecialtyEntity, object => object.artisan)
  specialties: ArtisanSpecialtyEntity[];

  @OneToMany(() => ArtisanRecipeEntity, object => object.artisan)
  recipes: ArtisanRecipeEntity[];

  @OneToMany(() => RecipeSharedWithEntity, object => object.shared_to_artisan)
  shared_with: RecipeSharedWithEntity[];

  @OneToMany(() => CakeArtisanEntity, object => object.artisan)
  cake_artisans: CakeArtisanEntity[];

  @OneToMany(() => StoreArtisanEntity, object => object.store)
  artisans: StoreArtisanEntity[];
}

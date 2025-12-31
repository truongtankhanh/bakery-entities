import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {CakeEntity} from './cake.entity';

@Entity('cake_images')
export class CakeImageEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  cake_id: number;

  @Column({type: 'varchar', length: 500})
  image_url: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  caption: string | null;

  @Column({type: 'boolean', default: false})
  is_primary: boolean;

  @Column({type: 'int', unsigned: true, default: 0})
  sort_order: number;

  @ManyToOne(() => CakeEntity, object => object.cake_images)
  @JoinColumn({name: 'cake_id'})
  cake: CakeEntity;
}

import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {CakeIngredientEntity} from './cake-ingredient.entity';
import {IngredientEntity} from './ingredient.entity';

@Entity('units')
export class UnitEntity extends BaseEntity {
  @Column({type: 'varchar', length: 20})
  code: string;

  @Column({type: 'varchar', length: 100})
  name: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => IngredientEntity, object => object.unit)
  ingredients: IngredientEntity[];

  @OneToMany(() => CakeIngredientEntity, object => object.unit_override)
  cake_ingredients: CakeIngredientEntity[];
}

import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {CakeIngredientEntity} from './cake-ingredient.entity';
import {IngredientEntity} from './ingredient.entity';

@Entity('units')
export class UnitEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'tinyint', width: 1, default: 1})
  is_active: number;

  @OneToMany(() => IngredientEntity, object => object.unit)
  ingredients: IngredientEntity[];

  @OneToMany(() => CakeIngredientEntity, object => object.unit_override)
  cake_ingredients: CakeIngredientEntity[];
}

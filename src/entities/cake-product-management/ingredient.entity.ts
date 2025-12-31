import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';

import {CakeIngredientEntity} from './cake-ingredient.entity';
import {UnitEntity} from './unit.entity';

@Entity('ingredients')
export class IngredientEntity extends BaseEntity {
  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'tinyint', unsigned: true})
  unit_id: number;

  @Column({type: 'varchar', length: 255, nullable: true})
  allergen_info: string | null;

  @Column({type: 'tinyint', width: 1, default: 1})
  is_active: number;

  @ManyToOne(() => UnitEntity, object => object.ingredients)
  @JoinColumn({name: 'unit_id'})
  unit: UnitEntity;

  @OneToMany(() => CakeIngredientEntity, object => object.ingredient)
  cake_ingredients: CakeIngredientEntity[];
}

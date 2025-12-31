import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {CakeEntity} from './cake.entity';
import {IngredientEntity} from './ingredient.entity';
import {UnitEntity} from './unit.entity';

@Entity('cake_ingredients')
export class CakeIngredientEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  cake_id: number;

  @Column({type: 'smallint', unsigned: true})
  ingredient_id: number;

  @Column({type: 'decimal', precision: 10, scale: 2})
  quantity: number;

  @Column({type: 'tinyint', unsigned: true, nullable: true})
  unit_override_id: number | null;

  @Column({type: 'tinyint', width: 1, default: 0})
  is_optional: number;

  @ManyToOne(() => CakeEntity, object => object.cake_ingredients)
  @JoinColumn({name: 'cake_id'})
  cake: CakeEntity;

  @ManyToOne(() => IngredientEntity, object => object.cake_ingredients)
  @JoinColumn({name: 'ingredient_id'})
  ingredient: IngredientEntity;

  @ManyToOne(() => UnitEntity, object => object.cake_ingredients)
  @JoinColumn({name: 'unit_override_id'})
  unit_override: UnitEntity | null;
}

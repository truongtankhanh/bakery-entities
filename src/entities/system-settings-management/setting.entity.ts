import {BaseEntity} from '../../base/base.entity';
import {Column, Entity} from 'typeorm';

@Entity('settings')
export class SettingEntity extends BaseEntity {
  @Column({type: 'varchar', length: 150})
  key_name: string;

  @Column({type: 'text', nullable: true})
  value: string | null;

  @Column({type: 'json', nullable: true})
  json_value: unknown | null;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'tinyint', default: 0})
  is_system: number;
}

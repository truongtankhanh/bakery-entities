import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, Index} from 'typeorm';

@Entity('settings')
@Index('idx_setting_system', ['is_system'])
export class SettingEntity extends BaseEntity {
  @Column({type: 'varchar', length: 150, unique: true})
  key_name: string;

  @Column({type: 'text', nullable: true})
  value: string | null;

  @Column({type: 'json', nullable: true})
  json_value: unknown | null;

  @Column({type: 'text', nullable: true})
  description: string | null;

  @Column({type: 'boolean', default: false})
  is_system: boolean;
}

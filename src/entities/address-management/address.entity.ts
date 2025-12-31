import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import {UserEntity} from '../users-management/user.entity';

@Entity('addresses')
export class AddressEntity extends BaseEntity {
  @Column({type: 'varchar', length: 150})
  full_name: string;

  @Column({type: 'varchar', length: 20})
  phone_number: string;

  @Column({type: 'varchar', length: 255})
  address_line1: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  address_line2: string | null;

  @Column({type: 'varchar', length: 150, nullable: true})
  ward: string | null;

  @Column({type: 'varchar', length: 150, nullable: true})
  district: string | null;

  @Column({type: 'varchar', length: 150, nullable: true})
  city: string | null;

  @Column({type: 'boolean', default: false})
  is_default: boolean;

  @ManyToOne(() => UserEntity, user => user.addresses, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'user_id'})
  user: UserEntity;
}

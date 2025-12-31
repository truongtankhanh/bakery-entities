import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, OneToMany} from 'typeorm';

import {UserTwoFactorAuthEntity} from './user-two-factor-auth.entity';

@Entity('two_factor_methods')
export class TwoFactorMethodEntity extends BaseEntity {
  @Column({type: 'varchar', length: 100})
  code: string;

  @Column({type: 'varchar', length: 255})
  label: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'tinyint', default: true})
  is_active: number;

  @OneToMany(() => UserTwoFactorAuthEntity, u2f => u2f.two_factor_method)
  user_two_factor_auths: UserTwoFactorAuthEntity[];
}

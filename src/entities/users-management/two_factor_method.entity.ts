import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, Index, OneToMany} from 'typeorm';

import {UserTwoFactorAuthEntity} from './user_two_factor_auth.entity';

@Entity('two_factor_methods')
@Index(['code'], {unique: true})
export class TwoFactorMethodEntity extends BaseEntity {
  @Column({type: 'varchar', length: 50})
  code: string;

  @Column({type: 'varchar', length: 100})
  name: string;

  @Column({type: 'varchar', length: 255, nullable: true})
  note: string | null;

  @Column({type: 'boolean', default: true})
  is_active: boolean;

  @OneToMany(() => UserTwoFactorAuthEntity, u2f => u2f.two_factor_method, {
    lazy: true,
  })
  user_two_factor_auths: Promise<UserTwoFactorAuthEntity[]>;
}

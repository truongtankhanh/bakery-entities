import {BaseEntity} from '../../base/base.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';

import {TwoFactorMethodEntity} from './two-factor-method.entity';
import {UserEntity} from './user.entity';

@Entity('user_two_factor_auth')
export class UserTwoFactorAuthEntity extends BaseEntity {
  @Column({type: 'int', unsigned: true})
  user_id: number;

  @Column({type: 'tinyint', unsigned: true})
  two_factor_method_id: number;

  @Column({type: 'tinyint', width: 1, default: 0})
  enabled: number;

  @Column({type: 'varchar', length: 255, nullable: true})
  secret_key: string | null;

  /**
   * Mảng hash của backup codes
   * Ví dụ: ['a94a8f...', '8f14e4...']
   */
  @Column({type: 'json', nullable: true})
  backup_codes: string[] | null;

  @Column({type: 'timestamp', nullable: true})
  last_verified_at: Date | null;

  /* ===================== FK ===================== */

  @ManyToOne(() => UserEntity, u => u.user_two_factor_auths, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'user_id'})
  user: UserEntity;

  @ManyToOne(() => TwoFactorMethodEntity, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({name: 'two_factor_method_id'})
  two_factor_method: TwoFactorMethodEntity;
}

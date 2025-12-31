import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

abstract class DateEntity {
  @CreateDateColumn({name: 'created_at'})
  public created_at: Date;

  @UpdateDateColumn({name: 'updated_at'})
  public updated_at: Date;

  @DeleteDateColumn({name: 'deleted_at', nullable: true, default: null})
  public deleted_at: Date | null;
}

export abstract class BaseEntity extends DateEntity {
  @PrimaryGeneratedColumn({unsigned: true})
  public readonly id: number;
}

export abstract class BaseUUIDEntity extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;
}

import {
  BeforeInsert,
  BeforeRemove,
  BeforeUpdate,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

abstract class DateEntity {
  @CreateDateColumn({name: 'created_at'})
  public created_at: Date;

  @UpdateDateColumn({name: 'updated_at'})
  public updated_at: Date;

  @UpdateDateColumn({name: 'deleted_at', nullable: true, default: null})
  public deleted_at: Date | null;

  @BeforeInsert()
  protected beforeInsert(): void {
    this.created_at = new Date();
    this.deleted_at = null;
  }

  @BeforeUpdate()
  protected beforeUpdate(): void {
    this.updated_at = new Date();
    this.deleted_at = null;
  }

  @BeforeRemove()
  protected beforeRemove(): void {
    this.deleted_at = new Date();
  }
}

export abstract class BaseEntity extends DateEntity {
  @PrimaryGeneratedColumn({unsigned: true})
  public readonly id: number;
}

export abstract class BaseUUIDEntity extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;
}

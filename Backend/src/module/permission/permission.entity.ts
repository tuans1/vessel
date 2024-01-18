import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 50 })
  permission_name: string;
}

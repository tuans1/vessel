import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 50 })
  full_name: string;

  @Column()
  username: string;

  @Column()
  password: string;
}

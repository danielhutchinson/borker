import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class App {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ name: 'welcome_message', length: 300 })
  welcomeMessage: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;
}

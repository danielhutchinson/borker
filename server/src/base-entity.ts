import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;
}

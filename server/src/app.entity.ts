import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base-entity';

@Entity()
export class App extends BaseEntity {
  @Column({ length: 100 })
  name: string;

  @Column({ name: 'welcome_message', length: 300 })
  welcomeMessage: string;
}

import { BaseEntity } from '../../base-entity';
import { Column, Entity } from 'typeorm';
import { hashSync, compare } from 'bcryptjs';
import { UserResponse } from '../models/user-response.model';

@Entity()
export class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  constructor(username: string, password: string) {
    super();

    this.username = username;

    if (password) {
      this.password = hashSync(password, 10);
    }
  }

  toResponse(): UserResponse {
    return {
      id: this.id,
      username: this.username,
      createdAt: this.createdAt,
    };
  }

  async comparePassword(password: string): Promise<boolean> {
    return await compare(password, this.password);
  }
}

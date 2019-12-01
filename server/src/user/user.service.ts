import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserResponse } from './models/user-response.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async save(user: User): Promise<User> {
    if (await this.find(user.username)) {
      throw new HttpException('A user with this username already exists', HttpStatus.BAD_REQUEST);
    }

    return await this.userRepository.save(user);
  }

  async find(username: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { username },
    });
  }
}

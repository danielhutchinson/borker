import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthenticationResponse } from './models/authentication-response.model';
import { AuthenticationRequest } from './models/authentication-request.model';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthenticationService {
  constructor(private userService: UserService) {}

  async registerUser(request: AuthenticationRequest): Promise<AuthenticationResponse> {
    const user = await this.userService.save(new User(request.username, request.password));

    return {
      user: {
        id: user.id,
        username: user.username,
        createdAt: user.createdAt,
      },
      token: 'abc.123.xyz',
    };
  }

  async login(request: AuthenticationRequest): Promise<string> {
    const user = await this.userService.find(request.username);

    if (!user || !(await user.comparePassword(request.password))) {
      throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
    }

    const payload = {
      user: {
        id: user.id,
        username: user.username,
        createdAt: user.createdAt,
      },
    };

    return sign(payload, 'ThisIsASecret', { expiresIn: '12h' });
  }
}

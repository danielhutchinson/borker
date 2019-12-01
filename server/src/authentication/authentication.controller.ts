import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationResponse } from './models/authentication-response.model';
import { AuthenticationRequest } from './models/authentication-request.model';
import { AuthenticationService } from './authentication.service';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

@Controller()
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService, private userService: UserService) {}

  @Post('register')
  async register(@Body() request: AuthenticationRequest): Promise<AuthenticationResponse> {
    const user = await this.userService.save(new User(request.username, request.password));
    const token = await this.authenticationService.login(request);

    return {
      user: user.toResponse(),
      token,
    };
  }

  @Post('login')
  async login(@Body() request: AuthenticationRequest): Promise<AuthenticationResponse> {
    const user = await this.userService.find(request.username);
    const token = await this.authenticationService.login(request);

    return {
      user: user.toResponse(),
      token,
    };
  }
}

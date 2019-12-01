import { UserResponse } from '../../user/models/user-response.model';

export class AuthenticationResponse {
  user: UserResponse;
  token: string;
}

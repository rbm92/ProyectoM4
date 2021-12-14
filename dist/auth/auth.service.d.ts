import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/auth/dto/login.dto';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
  private userService;
  private jwtService;
  constructor(userService: UserService, jwtService: JwtService);
  validateUser(email: string, pass?: string): Promise<any>;
  login(user: LoginUserDto): Promise<{
    access_token: string;
  }>;
}

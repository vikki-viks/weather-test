import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/userService';
import { RegistrationUserDto } from 'src/auth/dto/registrationUserDto';
import { LoginUserDto } from './dto/loginUserDto';
import { validatePassword } from './crypto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async loginUser({ login, password }: LoginUserDto) {
    const user = await this.userService.findOne({ login });

    if (!user) {
      throw new Error('User not found');
    }

    if (!(await validatePassword(password, user.password))) {
      throw new UnauthorizedException();
    }

    return {
      fio: user.fio,
      apiToken: user.apiToken,
    };
  }

  async registrationUser(registrationUserDto: RegistrationUserDto) {
    return await this.userService.createUser(registrationUserDto);
  }
}

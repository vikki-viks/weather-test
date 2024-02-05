import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './authService';
import { RegistrationUserDto } from 'src/auth/dto/registrationUserDto';
import { LoginUserDto } from './dto/loginUserDto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLoginResponse } from './api/createLoginResponse';
import { CreateRegistrationResponse } from './api/createRegistrationResponse';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @ApiOperation({
    description: 'Авторизация пользователя',
  })
  @ApiResponse({
    status: 200,
    type: CreateLoginResponse,
  })
  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.loginUser(loginUserDto);
  }

  @ApiOperation({
    description: 'Регистрация пользователя',
  })
  @ApiResponse({
    status: 200,
    type: CreateRegistrationResponse,
  })
  @Post('registration')
  registration(@Body() registrationUserDto: RegistrationUserDto) {
    return this.authService.registrationUser(registrationUserDto);
  }
}

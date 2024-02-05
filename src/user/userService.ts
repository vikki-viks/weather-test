import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from 'src/auth/crypto';
import { RegistrationUserDto } from 'src/auth/dto/registrationUserDto';
import { Users } from 'src/entities/usersEntity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  async findOne({ login }) {
    return await this.usersRepository.findOne({ where: { login } });
  }

  async createUser({ login, password, fio }: RegistrationUserDto) {
    const hashedPassword = await hashPassword(password);

    const accessToken = await this.jwtService.signAsync({
      login,
      fio,
    });

    await this.usersRepository.insert({
      login,
      password: hashedPassword,
      fio,
      apiToken: accessToken,
    });

    return { accessToken, fio };
  }
}

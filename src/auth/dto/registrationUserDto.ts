import { ApiProperty } from '@nestjs/swagger';
import { Matches, MinLength } from 'class-validator';

export class RegistrationUserDto {
  @ApiProperty()
  login!: string;

  @ApiProperty()
  @MinLength(4)
  @Matches(/[.,!_]/)
  password!: string;

  @ApiProperty()
  fio!: string;
}

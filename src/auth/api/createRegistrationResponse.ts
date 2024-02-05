import { ApiProperty } from '@nestjs/swagger';

export class CreateRegistrationResponse {
  @ApiProperty()
  fio!: string;

  @ApiProperty()
  apoToken!: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateLoginResponse {
  @ApiProperty()
  fio!: string;

  @ApiProperty()
  apiToken!: string;
}

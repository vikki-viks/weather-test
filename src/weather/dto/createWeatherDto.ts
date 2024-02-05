import { ApiProperty } from '@nestjs/swagger';

export class CreateWeatherDto {
  @ApiProperty()
  apiToken!: string;

  @ApiProperty()
  city!: string;

  @ApiProperty()
  language?: string = 'en';
}

import { ApiProperty } from '@nestjs/swagger';

export class LocationResponse {
  @ApiProperty()
  name: string;

  @ApiProperty()
  region: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  lat: number;

  @ApiProperty()
  lon: number;

  @ApiProperty()
  tz_id: string;

  @ApiProperty()
  localtime_epoch: number;

  @ApiProperty()
  localtime: Date;
}

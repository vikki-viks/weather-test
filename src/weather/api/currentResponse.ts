import { ApiProperty } from '@nestjs/swagger';
import { ConditionResponse } from './conditionResponse';

export class CurrentResponse {
  @ApiProperty()
  last_updated_epoch: number;

  @ApiProperty()
  last_updated: Date;

  @ApiProperty()
  temp_c: number;

  @ApiProperty()
  temp_f: number;

  @ApiProperty()
  is_day: number;

  @ApiProperty()
  condition: ConditionResponse;

  @ApiProperty()
  wind_mph: number;

  @ApiProperty()
  wind_kph: number;

  @ApiProperty()
  wind_degree: number;

  @ApiProperty()
  wind_dir: string;

  @ApiProperty()
  pressure_mb: number;

  @ApiProperty()
  pressure_in: number;

  @ApiProperty()
  precip_mm: number;

  @ApiProperty()
  precip_in: number;

  @ApiProperty()
  humidity: number;

  @ApiProperty()
  cloud: number;

  @ApiProperty()
  feelslike_c: number;

  @ApiProperty()
  feelslike_f: number;

  @ApiProperty()
  vis_km: number;

  @ApiProperty()
  vis_miles: number;

  @ApiProperty()
  uv: number;

  @ApiProperty()
  gust_mph: number;

  @ApiProperty()
  gust_kph: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { LocationResponse } from './locationResponse';
import { CurrentResponse } from './currentResponse';

export class CreateWeatherResponse {
  @ApiProperty({ type: LocationResponse })
  location: LocationResponse;

  @ApiProperty({ type: CurrentResponse })
  current: CurrentResponse;
}

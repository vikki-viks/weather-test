import { ApiProperty } from '@nestjs/swagger';

export class ConditionResponse {
  @ApiProperty()
  text: string;

  @ApiProperty()
  icon: string;

  @ApiProperty()
  code: number;
}

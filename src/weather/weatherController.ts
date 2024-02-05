import { Body, Controller, Post } from '@nestjs/common';
import { WeatherService } from './weatherService';
import { CreateWeatherDto } from './dto/createWeatherDto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateWeatherResponse } from './api/createWeatherResponse';

@ApiTags('weather')
@Controller()
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @ApiOperation({
    description: 'Текущая погода',
  })
  @ApiResponse({
    status: 200,
    type: CreateWeatherResponse,
  })
  @Post('weather')
  login(@Body() createWeatherDto: CreateWeatherDto) {
    return this.weatherService.getWeather(createWeatherDto);
  }
}

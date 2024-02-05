import { Injectable } from '@nestjs/common';
import { CreateWeatherDto } from './dto/createWeatherDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/usersEntity';
import { Repository } from 'typeorm';
import { Actions } from 'src/entities/actionsEntity';

@Injectable()
export class WeatherService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    @InjectRepository(Actions)
    private actionRepository: Repository<Actions>,
  ) {}

  async getWeather({ apiToken, city, language }: CreateWeatherDto) {
    const user = await this.userRepository.findOne({ where: { apiToken } });

    if (user.apiToken !== apiToken) {
      throw new Error('Invalid token');
    }
    const userId = user.id;
    const dateRequestInSecond = Math.round(Date.now() / 1000);

    const dataWeather = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}&lang=${language}`,
    );

    const responseStatus = dataWeather.status;

    const resultWeather = await dataWeather.json();

    const temperature = resultWeather.current.temp_c;

    await this.actionRepository.insert({
      user: userId,
      actionTime: dateRequestInSecond,
      requestResult: responseStatus,
      tempC: temperature,
    });

    return resultWeather;
  }
}

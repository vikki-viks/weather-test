import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { WeatherService } from './weatherService';
import { WeatherController } from './weatherController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/usersEntity';
import { Actions } from 'src/entities/actionsEntity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1000000s' },
    }),
    TypeOrmModule.forFeature([Users, Actions]),
  ],
  providers: [WeatherService],
  controllers: [WeatherController],
  exports: [WeatherService],
})
export class WeatherModule {}

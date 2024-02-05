import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Actions } from './entities/actionsEntity';
import { Users } from './entities/usersEntity';
import { AuthModule } from './auth/authModule';
import { UserModule } from './user/userModule';
import { WeatherModule } from './weather/weatherModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT!),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [Actions, Users],
      synchronize: true,
      dropSchema: false,
    }),
    AuthModule,
    UserModule,
    WeatherModule,
  ],
})
export class AppModule {}

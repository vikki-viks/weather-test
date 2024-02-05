import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Weather')
    .setDescription('The weather API description')
    .setVersion('1.0')
    .addTag('weather')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  console.log('123');

  SwaggerModule.setup('api', app, document);

  await app.listen(Number(process.env.PORT));
}
bootstrap();

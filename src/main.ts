import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { transform } from 'typescript';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true })); // 이 한줄만 넣어주면 됩니다! 잊지마세요! // test code
  await app.listen(3000);
}
bootstrap();

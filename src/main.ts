import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const loger = new Logger('APP');
  const app = await NestFactory.create(AppModule);
  await app.listen(7000, () => {
    loger.verbose('App running port 7000');
  });
}
bootstrap();

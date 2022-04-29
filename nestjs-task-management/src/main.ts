import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // this will use the validation in the dto, saving us code lines

  await app.listen(3000); // standard port for node apps
}
bootstrap();

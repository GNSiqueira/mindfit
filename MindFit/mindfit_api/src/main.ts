import { NestFactory } from '@nestjs/core';
import { Module, ValidationPipe, VersioningType } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './configuration';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), TaskModule],
})
export class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

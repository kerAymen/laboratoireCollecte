import { NestFactory } from '@nestjs/core';
import { VersioningType, ValidationPipe } from '@nestjs/common';
 
import { AppModule } from './app.module';
import { configureSwagger } from './configure-swagger';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  app.setGlobalPrefix('api');
 
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
 
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
 
  configureSwagger(app);
 
  await app.listen(process.env.PORT ?? 3000);
}
 
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService)

  const frontendUrl = configService.get<string>('FRONTEND_URL')
  const localFrontendUrl = configService.get<string>('LOCAL_FRONTEND_URL')
  
  app.enableCors({
    origin: [frontendUrl,localFrontendUrl],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept,Authorization',
  });

  app.useGlobalPipes(
    new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true })
  );

  app.use(cookieParser());

  await app.listen(process.env.PORT ?? 3001);



}

bootstrap()



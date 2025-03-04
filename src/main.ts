import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200', // ✅ Allow Angular frontend
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // ✅ Allowed methods
    allowedHeaders: 'Content-Type, Authorization', // ✅ Allowed headers
  });
  await app.listen(3000);
}
bootstrap();


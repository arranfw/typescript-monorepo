import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { customLogger } from './common/logger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: customLogger,
  });
  app.enableCors();
  await app.listen(4000);
}
bootstrap();

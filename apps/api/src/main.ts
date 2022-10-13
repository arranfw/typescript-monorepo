import { NestFactory } from '@nestjs/core';
import { WinstonModule, utilities } from 'nest-winston';
import * as winston from 'winston';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          level: 'debug',
          format: winston.format.combine(
            winston.format.timestamp(),
            process.env.RUNTIME_ENV === 'local'
              ? winston.format.combine(
                  winston.format.colorize(),
                  winston.format.align(),
                  utilities.format.nestLike('API', { prettyPrint: true })
                )
              : winston.format.json()
          ),
        }),
      ],
      exitOnError: false,
    }),
  });
  app.enableCors();
  await app.listen(4000);
}
bootstrap();

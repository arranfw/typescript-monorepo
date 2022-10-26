import { Logger, MiddlewareConsumer, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HTTPLoggerMiddleware } from './common/middleware/request-logger.middleware';
import { HealthModule } from './health/health.module';

@Module({
  imports: [HealthModule],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HTTPLoggerMiddleware).forRoutes('*');
  }
}

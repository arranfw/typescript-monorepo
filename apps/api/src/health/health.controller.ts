import { Controller, Get } from '@nestjs/common';
import { HealthCheck } from './entity/HealthCheck.entity';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  getHealthCheck(): HealthCheck {
    return this.healthService.getHealthCheck();
  }
}

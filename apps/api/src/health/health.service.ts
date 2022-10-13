import { Injectable } from '@nestjs/common';

import { HealthCheck } from './entity/HealthCheck.entity';

@Injectable()
export class HealthService {
  getHealthCheck(): HealthCheck {
    const healthCheck = new HealthCheck();
    const currentProcessMemoryUsage = this.getCurrentProcessMemoryUsage();

    healthCheck.memoryUsage = `${currentProcessMemoryUsage}mb`;

    return healthCheck;
  }

  getCurrentProcessMemoryUsage() {
    const used = process.memoryUsage().heapUsed / 1024 / 1024; // division to convert bytes to megabytes
    return +used.toFixed(2);
  }
}

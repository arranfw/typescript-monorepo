export class HealthCheck {
  constructor() {
    this.status = 'ok';
    this.serverTime = new Date();
    this.uptime = `${process.uptime().toFixed(2)}s`;
  }

  status: 'ok';

  serverTime: Date;

  uptime: string;

  memoryUsage: string;
}

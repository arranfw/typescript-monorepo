import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly logger: Logger) {}

  getError() {
    const error = new InternalServerErrorException('Sample server error');
    this.logger.error(error);
    throw new InternalServerErrorException('Sample server error');
  }
}

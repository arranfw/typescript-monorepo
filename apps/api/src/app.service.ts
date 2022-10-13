import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class AppService {
  getError() {
    throw new InternalServerErrorException('Sample server error');
  }
}

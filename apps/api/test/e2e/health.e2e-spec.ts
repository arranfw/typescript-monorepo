import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  process.memoryUsage().heapUsed;
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2020-01-01'));
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/health (GET) returns status = ok', async () => {
    const res = await request(app.getHttpServer()).get('/health').expect(200);

    expect(res.body.status).toBe('ok');
    // {
    //   status: 'ok',
    //   serverTime: '2020-01-01T00:00:00.000Z',
    //   uptime: { asString: expect.any(String), seconds: expect.any(Number) },
    //   memoryUsage: { asString: expect.any(String), mb: expect.any(Number) },
    // });
  });
  it('/health (GET) returns current server time', async () => {
    const res = await request(app.getHttpServer()).get('/health').expect(200);

    expect(res.body.serverTime).toBe('2020-01-01T00:00:00.000Z');
    // {
    //   status: 'ok',
    //   serverTime: '2020-01-01T00:00:00.000Z',
    //   uptime: { asString: expect.any(String), seconds: expect.any(Number) },
    //   memoryUsage: { asString: expect.any(String), mb: expect.any(Number) },
    // });
  });
});

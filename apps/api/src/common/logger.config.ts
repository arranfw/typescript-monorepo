import { WinstonModule, utilities } from 'nest-winston';
import * as winston from 'winston';

const globalLoggerFormat = winston.format.timestamp();

const localLoggerFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.align(),
  utilities.format.nestLike('API', { prettyPrint: true })
);

const hostedLoggerFormat = winston.format.json();

export const customLogger = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(
        globalLoggerFormat,
        process.env.RUNTIME_ENV === 'local' ? localLoggerFormat : hostedLoggerFormat
      ),
    }),
  ],
  exitOnError: false,
});

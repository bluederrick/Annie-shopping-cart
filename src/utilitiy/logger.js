import { createLogger, transports, format, addColors } from 'winston';
import { _Level } from './constants.js';
import config from '../Application.properties.js';
import { existsSync, mkdirSync } from 'fs';
const { combine, timestamp, label, prettyPrint, colorize } = format;
const myCustomLevels = {
  levels: {
    foo: 0,
    bar: 1,
    baz: 2,
    foobar: 3
  },
  colors: {
    foo: 'blue',
    bar: 'green',
    baz: 'yellow',
    foobar: 'red'
  }
};
// addColors();

export const logger = createLogger({
  transports: [
    new transports.File({
      filename: 'error.log',
      level: 'error',
      format: format.json()
    }),
    new transports.File({
      filename: 'combined.log',
      level: 'info',
      format: format.json()
    }),
    new transports.Http({
      level: 'warn',
      format: format.json()
    })
  ]
});
// }

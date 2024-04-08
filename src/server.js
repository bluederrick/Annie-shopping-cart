import { createServer } from 'http';
import app from './Application';
import config from './config';
import { Logger } from './utilitiy/logger';
import { _Level } from './utilitiy/constants';
import customError from './utilitiy/customError';
import winston from 'winston';
import _DB from './DBconnection./DBconnectivity';
import router from './code_Block/index.products/product.router';
import { GenerateOTP } from './Generic services/generateOTP';
const fs = require('fs');
_DB();

// LOG_stack()
const log = new Logger();
log.loggerStack();
// console.log(new customError(400, "Invalid ", "failed"))
const server = createServer(app);

server.listen(config.PORT, () => {
  winston.log('error', `listening on port ${config.HOST}:${config.PORT} `);
  console.log(`listening on port ${config.HOST}:${config.PORT} `);
});

// handle uncaught exceptions sychronus operations
process.on('uncaughtException', (err) => {
  // winston.log(_Level[0], 'derrick');
  winston.error('error', err.message, err.name);
  console.log('unhandledException error is:', err.message, err.name);
  fs.writeFileSync('error.txt', err.message);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.log(err);
  winston.log(_Level[1], err.message);
  process.exit(1);
});

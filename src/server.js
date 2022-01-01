import { createServer } from 'http';
import app from './Application.js';
import config from './Config.js';
import { logger } from './Utilitiy/logger.js';
import { _Level } from './Utilitiy/constants.js';
import customError from './Utilitiy/customImpl.js';
import winston from 'winston';
// import _DB from './DBconnection./DBconnectivity.js';
import router from './App/Products/Router/product.router.js';
import { GenerateOTP } from './Generic services/generateOTP.js';
import fs from 'fs';

const server = createServer(app);
// create server instance
server.listen(config.PORT, () => {
  //  logger.error('error', `listening on port ${config.HOST}:${config.PORT} `);
  console.log(`listening on port ${config.HOST}:${config.PORT} `);
  logger.log('info', `listening on port ${config.HOST}:${config.PORT} `);
});

// handle uncaught exceptions sychronus operations
process.on('uncaughtException', (err) => {
  // process.on is to listen to uncaught exceptions , then it does it excutes the call back function
  // winston.log(_Level[0], 'derrick');
  logger.log(_Level[0], err.message, err.name, err.stackTrace);
  console.log('unhandledException error is:', err.message, err.name, err.stack);
  server.close();
  process.exit(1);
});
// unhandled  is forb failed  promises
process.on('unhandledRejection', (err) => {
  console.log('unhandledRejection error is:', err.message, err.stack);
  logger.log('error', err.message);
  process.exit(1);
});

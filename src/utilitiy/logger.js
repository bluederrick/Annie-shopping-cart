import winston from 'winston';
import { _Level, log, myCustomLevels } from '../utilitiy/constants';
import config from '../config';
import { existsSync, mkdirSync } from 'fs';
// const { combine, timestamp, label, prettyPrint, simple, jso } = format;

const myFormat = winston.format.printf(
  ({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  }
);
// export const LOG_stack = () => {

//     if (!existsSync('combined')) {
//         console.log("Creating the file")

//         mkdirSync('combined');
//     }

//     else {
//         null

//     }

//
//         winston.createLogger({
//             level: 'info',
//             format: winston.format.combine(
//                 winston.format.timestamp(),
//                 myFormat
//             ),
//             transports: [
//                 new winston.transports.Console(),
//                 new winston.transports.File({ filename: 'combined/combined.log' })
//             ]
//         });
//
//     return true;

// };

// import { default: logger } from "../Loggers/logger";

export class Logger {
  loggerStack() {
    if (!existsSync('combined')) {
      console.log('Creating the file');

      mkdirSync('combined');
    } else {
      null;
    }

    logger: winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        myFormat,
        winston.format.json()
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: 'combined/combined.log',
          level: 'error'
        })
      ]
    });
    // if (process.env.NODE_ENV !== 'production') {
    //     logger.add(new winston.transports.File({
    //         format: winston.format.simple(),
    //         filename: 'combined/combined.log'
    //     }));
    // }
  }
}

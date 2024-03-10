import { createServer } from 'http';
import app from './Application';
import config from './config';
import { winston } from './utilitiy/logger';
import { _Level } from './constants';
import customError from './utilitiy/customError';
var fs = require('fs');


// console.log(new customError(400, "Invalid ", "failed"))
const server = createServer(app);

server.listen(config.PORT, () => {
    winston.log(_Level[1], `listening on port ${config.HOST}:${config.PORT} `)
    console.log(`listening on port ${config.HOST}:${config.PORT} `)
});


// handle uncaught exceptions sychronus operations  
process.on('uncaughtException', (err) => {
    winston.log(_Level[0], 'derrick');
    console.log('unhandledException error is:', err.message, err.name);
    fs.writeFileSync('error.txt', err.message)
    process.exit(1)
})

process.on('unhandledRejection', (err) => {
    console.error(err)
    winston.error(_Level[1], err.message);
    process.exit(1);
})

console.log(x)
import { configure, Logger, transports, info, format, addColors, } from 'winston';
import { _Level, log, myCustomLevels } from '../constants';
import config from '../config';
// const { combine, timestamp, label, prettyPrint, simple, jso } = format;




export const winston = new (Logger)({

    transports: [
        new (transports.File)({
            defaultMeta: { service: 'API_SERVICE' },
            // name: 'info-file',
            filename: 'filelog-info.log',
            level: _Level[1],
            format: format.combine(format.json(), format.timestamp(),
                format.colorize(), format.simple(), format.label({ label: 'logged!' }),
                format.prettyPrint()
            )
        }),
        new (transports.Console)({
            // name: 'error-file',
            // filename: 'filelog-error.log',
            level: 'error',
            format: format.combine(format.json(), format.timestamp(),
                format.colorize(), format.simple()

            )
        })
    ]
});

if (process.env.NODE_ENV !== 'production') {
    winston.add(new transports.Console({
        formats: format.simple(),
    }));
}



// import { default: logger } from "../Loggers/logger";


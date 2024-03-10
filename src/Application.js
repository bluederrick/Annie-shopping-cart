import express from 'express';
import cors from 'cors'

const app = express();

// cors conifiguration

const whiteList = ['*'];

const corsOptions = {
    origin(origin, callback) {
        if (
            whiteList.includes('*') ||
            whiteList.indexOf(origin) !== -1 ||
            !origin
        ) {
            callback(null, true);
        } else {
            callback(new Error('Access denied'));
        }
    }
};
// middle wares 
app.use(express.urlencoded({ extended: true }),
    express.json(),
    cors(corsOptions));

export default app;
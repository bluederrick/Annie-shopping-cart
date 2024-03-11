import mongoose from 'mongoose';
import config from '../config';
import { winston } from '../utilitiy/logger';

let mongDB_URL;
export const _DB = () => {
    mongDB_URL = config.MONGO_URL;
    console.log(mongDB_URL);
    mongoose.set('strictQuery',
        false);

    mongoose.connect(mongDB_URL)

    mongoose.connection.on('open', () => {
        // winston.info('info', 'MongoDB connected')
        console.log('MongoDB connected successfully')
    })
}






export default mongoose;

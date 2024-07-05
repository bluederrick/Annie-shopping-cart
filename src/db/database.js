import mongoose from 'mongoose';
import config from '../Application.properties.js';
import winston from 'winston';
import { logger } from '../Utilitiy/logger.js';
import customError from '../Utilitiy/customImpl.js';
const mongodbCompass = config.MONGODB_COMPASS;
const mongDB_URL = config.MONGO_URL;
if(process.env.NODE_ENV === 'test'){
const _dB = () => {
  try {
    mongoose.connect(`${mongodbCompass}`);
    /
    const db = mongoose.connection;
    if (!db) {
      const err = new CustomError('!Ooops database connection failed', 400);
      console.log(err);
    }
    db.once('open', () =>
      // logger.log('info', 'Successfully connected to MongoDB');
      console.log('Successfully connected to MongoDB')
    );
    db.on('error', (e) => logger.log('error', e));
  } catch (e) {
    console.log(`Error connecting to MongoDB - ${e.message}`);
  }
};
}
export default _dB;

import mongoose from 'mongoose';
import config from '../Config.js';
import winston from 'winston';
import { logger } from '../Utilitiy/logger.js';
import customError from '../Utilitiy/customImpl.js';
const mongodbCompass = config.MONGODB_COMPASS;
const mongDB_URL = config.MONGO_URL;
const _dB = () => {
  mongoose.connect(mongodbCompass);
  //   mongoose.connect(
  //     'mongodb+srv://admin:12345678@admin.7wv3z5w.mongodb.net/?retryWrites=true&w=majority&appName=admin'
  //   );
  const db = mongoose.connection;
  if (!db) {
    const err = new CustomError('!Ooops database connection failed', 400);
    console.log(err);
    // console.log(error);
  }
  db.once('open', () =>
    // logger.log('info', 'Successfully connected to MongoDB');
  console.log('Successfully connected to MongoDB')
  );
  db.on('error', (e) => logger.log('error', e));
};
export default _dB;

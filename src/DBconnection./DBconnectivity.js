import mongoose from 'mongoose';
import config from '../config';
// import { winston } from '../utilitiy/logger';
import winston from 'winston';

let mongDB_URL;

const _DB = () => {
    mongDB_URL = config.MONGO_URL;
    // mongoose.set('strictQuery',
    //     false);
    // mongoose.connect(mongDB_URL)
    mongoose.connect("mongodb://localhost:27017/Annie_shop")

    const db = mongoose.connection;

    db.once('open', () => console.log('Successfully connected to MongoDB'));
    db.on('error', (e) => console.log(e));

    // mongoose.connection.on('open', () => {
    //     console.log('MongoDB connected');

    // })
}


export default _DB;





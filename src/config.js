import dotenv from 'dotenv'
dotenv.config()
let config;


export default config = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.DB_CONNECTION,
    ACCESS_SECRET_TOKEN: process.env.ACCESS_SECRET_TOKEN,
    HOST: process.env.HOST,
    PRODUCTION: process.env.NODE_ENV,
    MONGO_URL: process.env.MONGODB_URL


}
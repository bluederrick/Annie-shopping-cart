import dotenv from 'dotenv'
dotenv.config()
let config;


export default config = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.DB_CONNECTION,
    HOST: process.env.HOST,
    PRODUCTION: process.env.NODE_ENV,
    MONGO_URL: process.env.MONGODB_URL,
    SECRET_KEY: process.env.SECRET_KEY,
    REFRESH_KEY: process.env.REFRESH_KEY,
    EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
}
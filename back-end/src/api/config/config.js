const dotenv = require('dotenv');
const envFound = dotenv.config();

if (envFound.error) {
  throw new Error("Couldn't find .env file ⚠️");
}

module.exports =  {
    app: {
        port: parseInt(process.env.APP_PORT),
        prefix: process.env.APP_API_PREFIX
    },
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT),
        database: process.env.DB_DATABASE
    }
};
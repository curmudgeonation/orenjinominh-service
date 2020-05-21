const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  endpoint: process.env.API_URL,
  port: process.env.PORT,
  mongoUri: process.env.MONGODB_URI,
  S3: process.env.S3_URL,
  hostS3: process.env.HOST_S3_URL,
};
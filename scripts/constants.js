const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '../');
const PROJECT_NAME = path.parse(PROJECT_PATH).name;

const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 8080;

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  isDev,
  SERVER_HOST,
  SERVER_PORT,
};

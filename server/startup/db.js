require('dotenv').config();
const config = require('config');
const mongoose = require('mongoose');
const winston = require('winston');
const devDebug = require('debug')('dev:db');
const testDebug = require('debug')('test:db');

module.exports = function (app) {
  const db = config.get('db');

  mongoose.connect(db, { useUnifiedTopology: true }).then(() => {
    winston.info(`Connected to ${db}...`);
    if (app.get('env') === 'development') devDebug(`Connected to ${db}...`);
    if (app.get('env') === 'test') testDebug(`Connected to ${db}...`);
  });
};

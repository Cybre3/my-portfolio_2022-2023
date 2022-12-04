require('dotenv').config();
const config = require('config');
const mongoose = require('mongoose');
const express = require('express');
const winston = require('winston');

const app = express();

require('./startup/cors')(app);
require('./startup/appRoutes-appMiddleware')(app);
require('./startup/db')(app);
require('./startup/config')();
require('./startup/apiValidation')();

if (app.get('env') === 'production') require('./startup/prod')(app);

const port =
  (app.get('env') === 'test' ? process.env.TEST_PORT : process.env.DEV_PORT) || config.get('port');

const server = app.listen(port, () => winston.info(`Listening to port ${port}...`));

module.exports = server;

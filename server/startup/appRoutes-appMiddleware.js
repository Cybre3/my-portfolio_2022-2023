require('dotenv').config();
const express = require('express');
const winston = require('winston');
const morgan = require('morgan');
const debug = require('debug')('app:startup');
const { format } = winston;
const { colorize, prettyPrint, label, combine, printf } = format;

const screensRouter = require('../routes/total_screensRoute');

const myFormat = printf(({ level, message }) => {
  return `${level}: ${message}`;
});

module.exports = function (app) {
  app.use(express.static('public'));

  if (app.get('env') === 'development' || app.get('env') === 'test') {
    app.use(morgan('tiny'));
    debug('Morgan activated...');
  }

  winston.add(
    new winston.transports.Console({
      format: combine(label({ label: 'info' }), prettyPrint(), colorize(), myFormat),
    })
  );

  app.use('/api/screens', screensRouter);
};

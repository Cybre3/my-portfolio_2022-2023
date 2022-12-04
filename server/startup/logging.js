const winston = require('winston');

const myDefaultFormat = printf(({ level, message, label, timestamp }) => {
  const [errorMessage, ...stack] = message.split('\n');
  return `\n--- ${label} ${level} ---\n[${timestamp}] ${level} ${errorMessage}\nstack${stack.join(
    '\n'
  )}\n--- ${label} ${level} ---\n`;
});

const myReqFormat = printf(({ level, message, label, timestamp, metadata }) => {
  return `\n--- ${label} ${level} ---\n[${timestamp}] ${level} ${message}\nstack${metadata}\n--- ${label} ${level} ---\n`;
});

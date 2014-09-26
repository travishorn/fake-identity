var isInt = require('./isInt');

module.exports = function(min, max) {
  'use strict';

  if (!isInt(min)) {
    throw new Error(min + ' is not an integer.');
  }

  if (!isInt(max)) {
    throw new Error(max + ' is not an integer.');
  }

  if (min >= max) {
    throw new Error(min + ' is greater than ' + max);
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

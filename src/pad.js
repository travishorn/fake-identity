var isInt = require('./isInt');

module.exports = function(n, length, char) {
  'use strict';

  if (!isInt(length)) {
    throw new Error(length + ' is not an integer.');
  }

  char = char || '0';
  n = n + '';

  if (n.length >= length) {
    return n;
  } else {
    return new Array(length - n.length + 1).join(char) + n;
  }
};

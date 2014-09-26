module.exports = function(array) {
  'use strict';

  if (Array.isArray(array)) {
    return array[Math.floor(Math.random() * array.length)];
  } else {
    throw new Error(array + ' is not an array.');
  }
};

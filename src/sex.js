var sexes = require('./sexes');
var randomInArray = require('./randomInArray');

module.exports = function() {
  'use strict';

  return randomInArray(sexes);
};

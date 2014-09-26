var pad = require('./pad');
var randomIntInRange = require('./randomIntInRange');

module.exports = function() {
  'use strict';

  return '(555) 555-' + pad(randomIntInRange(0, 9999), 4);
};

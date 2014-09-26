module.exports = function() {
  'use strict';

  // Generate random birthday with age between 18 and 60
  var now = new Date();
  var year = (now.getFullYear() - 60) + Math.floor(Math.random() * 42);
  var month = Math.floor(Math.random() * 11);
  var day = Math.floor(Math.random() * 30);

  return new Date(year, month, day);
};

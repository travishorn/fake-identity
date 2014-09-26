module.exports = function(firstName, lastName) {
  'use strict';

  // Create email address based on first initial and last name
  return firstName.charAt(0).toLowerCase() +
         lastName.toLowerCase() +
         '@example.com';
};

var randomInArray = require('./randomInArray');

module.exports = function () {
  'use strict';
  
  // Common last names
  var lastNames = ['Adams', 'Alexander', 'Allen', 'Anderson', 'Bailey', 'Baker',
                   'Barnes', 'Bell', 'Bennett', 'Brooks', 'Brown', 'Bryant',
                   'Butler', 'Campbell', 'Carter', 'Clark', 'Coleman',
                   'Collins', 'Cook', 'Cooper', 'Cox', 'Davis', 'Diaz',
                   'Edwards', 'Evans', 'Flores', 'Foster', 'Garcia', 'Gonzales',
                   'Gonzalez', 'Gray', 'Green', 'Griffin', 'Hall', 'Harris',
                   'Hayes', 'Henderson', 'Hernandez', 'Hill', 'Howard',
                   'Hughes', 'Jackson', 'James', 'Jenkins', 'Johnson', 'Jones',
                   'Kelly', 'King', 'Lee', 'Lewis', 'Long', 'Lopez', 'Martin',
                   'Martinez', 'Miller', 'Mitchell', 'Moore', 'Morgan',
                   'Morris', 'Murphy', 'Nelson', 'Parker', 'Patterson', 'Perez',
                   'Perry', 'Peterson', 'Phillips', 'Powell', 'Price',
                   'Ramirez', 'Reed', 'Richardson', 'Rivera', 'Roberts',
                   'Robinson', 'Rodriguez', 'Rogers', 'Ross', 'Russell',
                   'Sanchez', 'Sanders', 'Scott', 'Simmons', 'Smith', 'Stewart',
                   'Taylor', 'Thomas', 'Thompson', 'Torres', 'Turner', 'Walker',
                   'Ward', 'Washington', 'Watson', 'White', 'Williams',
                   'Wilson', 'Wood', 'Wright', 'Young'];
  
  return randomInArray(lastNames);
};
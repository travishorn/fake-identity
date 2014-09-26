var randomIntInRange = require('./randomIntInRange');
var randomInArray = require('./randomInArray');

module.exports = function() {
  'use strict';

  // Common street names in the US
  var streets = [
    '11th Street', '12th Street', '1st Avenue', '1st Street', '2nd Avenue',
    '2nd Street', '2nd Street West', '3rd Avenue', '3rd Street',
    '3rd Street West', '4th Street', '4th Street West', '5th Avenue',
    '5th Street', 'Academy Street', 'Adams Street', 'Beech Street',
    'Bridge Street', 'Broad Street', 'Broadway', 'Cedar Street',
    'Center Street', 'Central Avenue', 'Cherry Lane', 'Cherry Street',
    'Chestnut Street', 'Church Road', 'Church Street', 'Court Street',
    'Dogwood Drive', 'East Street', 'Elizabeth Street', 'Elm Street',
    'Franklin Street', 'Front Street', 'Green Street', 'Grove Street',
    'Hickory Lane', 'High Street', 'Highland Avenue', 'Hill Street',
    'Hillside Avenue', 'Holly Drive', 'Jackson Street', 'Jefferson Avenue',
    'Jefferson Street', 'Liberty Street', 'Lincoln Avenue', 'Lincoln Street',
    'Locust Street', 'Madison Avenue', 'Madison Street', 'Main Street',
    'Main Street East', 'Main Street North', 'Main Street South',
    'Main Street West', 'Maple Avenue', 'Maple Street', 'Market Street',
    'Meadow Lane', 'Mill Street', 'Monroe Street', 'New Street', 'North Street',
    'Oak Lane', 'Oak Street', 'Park Avenue', 'Park Place', 'Park Street',
    'Pearl Street', 'Pennsylvania Avenue', 'Pine Street', 'Pleasant Street',
    'Prospect Street', 'Railroad Street', 'Ridge Road', 'River Road',
    'River Street', 'Route 1', 'Route 30', 'Route 32', 'Route 6',
    'School Street', 'South Street', 'Spring Street', 'Spruce Street',
    'State Street', 'Sunset Drive', 'Union Street', 'Valley Road',
    'Vine Street', 'Walnut Street', 'Washington Avenue', 'Washington Street',
    'Water Street', 'West Street', 'Winding Way', 'Woodland Drive'
  ];

  var streetNumber = randomIntInRange(1, 9999);
  var street = randomInArray(streets);

  return streetNumber + ' ' + street;
};

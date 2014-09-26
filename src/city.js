var randomInArray = require('./randomInArray');

module.exports = function() {
  'use strict';

  // Common city names in United States
  var firstNames = [
    'Arlington', 'Ashland', 'Auburn', 'Bethel', 'Burlington', 'Cedar Grove',
    'Centerville', 'Clayton', 'Cleveland', 'Clinton', 'Concord', 'Dayton',
    'Dover', 'Fairfield', 'Fairview', 'Five Points', 'Forest Hills', 'Franklin',
    'Georgetown', 'Glendale', 'Greenville', 'Greenwood', 'Highland Park',
    'Hudson', 'Jackson', 'Kingston', 'Lakeview', 'Lakewood', 'Lexington',
    'Liberty', 'Madison', 'Manchester', 'Marion', 'Midway', 'Milford', 'Milton',
    'Mount Pleasant', 'Mount Vernon', 'New Hope', 'Newport', 'Oak Grove',
    'Oak Hill', 'Oakland', 'Oxford', 'Pine Grove', 'Pleasant Grove',
    'Pleasant Hill', 'Pleasant Valley', 'Riverside', 'Salem', 'Shady Grove',
    'Shiloh', 'Springfield', 'Troy', 'Union', 'Washington', 'Winchester'
  ];

  return randomInArray(firstNames);
};

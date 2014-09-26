var randomInArray = require('./randomInArray');

module.exports = function() {
  'use strict';

  // Common departments you might find at a business
  var departments = [
    'Accounting', 'Accounts Payable', 'Customer Service', 'Engineering',
    'Finance', 'Food Service', 'Human Resources', 'Information Systems',
    'Janitorial', 'Legal', 'Mail Center', 'Manufacturing', 'Marketing',
    'Operations', 'Payroll', 'Product Management', 'Purchasing',
    'Quality Assurance', 'Records', 'Research and Development', 'Sales',
    'Security', 'Technology', 'Training'
  ];

  return randomInArray(departments);
};

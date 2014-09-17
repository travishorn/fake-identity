var should = require('chai').should();
var dateOfBirth = require('../src/dateOfBirth');

describe('dateOfBirth()', function () {
  'use strict';
  
  it('should return a date, regardless of arguments', function () {
    dateOfBirth().should.be.a('date');
    dateOfBirth('test').should.be.a('date');
  });
});
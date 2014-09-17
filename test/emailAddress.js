var should = require('chai').should();
var emailAddress = require('../src/emailAddress');

describe('emailAddress()', function () {
  'use strict';
  
  it('should return a string', function () {
    emailAddress('a', 'b').should.be.a('string');
  });
});
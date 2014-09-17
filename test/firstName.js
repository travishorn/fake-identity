var should = require('chai').should();
var firstName = require('../src/firstName');

describe('firstName()', function () {
  'use strict';
  
  it('should return a string, regardless of arguments', function () {
    firstName().should.be.a('string');
    firstName('test').should.be.a('string');
  });
});
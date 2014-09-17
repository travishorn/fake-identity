var should = require('chai').should();
var phoneNumber = require('../src/phoneNumber');

describe('phoneNumber()', function () {
  'use strict';
  
  it('should return a string, regardless of arguments', function () {
    phoneNumber().should.be.a('string');
    phoneNumber('test').should.be.a('string');
  });
  
  it('should be formatted like a phone number', function () {
    var generatedNumber = phoneNumber();
    
    generatedNumber.slice(0, 1).should.equal('(');
    generatedNumber.slice(4, 6).should.equal(') ');
    generatedNumber.slice(9, 10).should.equal('-');
    generatedNumber.length.should.equal(14);
  });
});
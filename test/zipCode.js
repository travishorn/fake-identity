var should = require('chai').should();
var zipCode = require('../src/zipCode');

describe('zipCode()', function () {
  'use strict';
  
  it('returns a 5 character string', function () {
    var zip = zipCode();
    
    zip.should.be.a('string');
    zip.should.have.length(5);
  });
  
  it('returns zip code within state if specified', function () {
    ['35', '36'].should.include(zipCode('AL').slice(0, 2));
  });
  
  it('throws an error when argument is not a state', function () {
    zipCode.bind(zipCode, 'AB').should.throw(Error);
  });
});
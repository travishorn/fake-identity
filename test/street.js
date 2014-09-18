var should = require('chai').should();
var street = require('../src/street');

describe('street()', function () {
  'use strict';
  
  it('returns a string, regardless of arguments', function () {
    street().should.be.a('string');
    street('test').should.be.a('string');
  });
});
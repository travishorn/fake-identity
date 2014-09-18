var should = require('chai').should();
var company = require('../src/company');

describe('company()', function () {
  'use strict';
  
  it('returns a string, regardless of arguments', function () {
    company().should.be.a('string');
    company('test').should.be.a('string');
  });
});
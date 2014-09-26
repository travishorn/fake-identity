var should = require('chai').should();
var city = require('../src/city');

describe('city()', function() {
  'use strict';

  it('returns a string, regardless of arguments', function() {
    city().should.be.a('string');
    city('test').should.be.a('string');
  });
});

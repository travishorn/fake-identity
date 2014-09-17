var should = require('chai').should();
var state = require('../src/state');

var states = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
              'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD',
              'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH',
              'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
              'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'];

describe('state()', function () {
  'use strict';
  
  it('should return a string, regardless of arguments', function () {
    state().should.be.a('string');
    state('test').should.be.a('string');
  });
  
  it('should be a US state', function () {
    states.should.include(state());
  });
});
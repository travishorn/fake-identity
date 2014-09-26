var state = require('../src/state');
var states = require('../src/states');

describe('state()', function() {
  'use strict';

  it('returns a string, regardless of arguments', function() {
    state().should.be.a('string');
    state('test').should.be.a('string');
  });

  it('returns a US state', function() {
    states.should.include(state());
  });
});

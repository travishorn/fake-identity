var lastName = require('../src/lastName');

describe('lastName()', function() {
  'use strict';

  it('returns a string, regardless of arguments', function() {
    lastName().should.be.a('string');
    lastName('test').should.be.a('string');
  });
});

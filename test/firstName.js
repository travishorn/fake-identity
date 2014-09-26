var firstName = require('../src/firstName');

describe('firstName()', function() {
  'use strict';

  it('returns a string', function() {
    firstName().should.be.a('string');
  });

  it('accepts a valid sex as an argument', function() {
    firstName.bind(firstName, 'male').should.not.throw(Error);
    firstName.bind(firstName, 'abc').should.throw(Error);
  });
});

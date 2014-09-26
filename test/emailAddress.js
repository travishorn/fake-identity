var emailAddress = require('../src/emailAddress');

describe('emailAddress()', function() {
  'use strict';

  it('returns a string', function() {
    emailAddress('a', 'b').should.be.a('string');
  });

  it('returns an email address based on first and last name', function() {
    emailAddress('a', 'b').slice(0, 2).should.equal('ab');
  });
});

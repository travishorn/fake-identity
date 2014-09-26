var dateOfBirth = require('../src/dateOfBirth');

describe('dateOfBirth()', function() {
  'use strict';

  it('returns a date, regardless of arguments', function() {
    dateOfBirth().should.be.a('date');
    dateOfBirth('test').should.be.a('date');
  });
});

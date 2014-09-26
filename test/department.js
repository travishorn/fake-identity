var department = require('../src/department');

describe('department()', function() {
  'use strict';

  it('returns a string, regardless of arguments', function() {
    department().should.be.a('string');
    department('test').should.be.a('string');
  });
});

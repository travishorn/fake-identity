var sex = require('../src/sex');

describe('sex()', function() {
  'use strict';

  it('returns a string, regardless of arguments', function() {
    sex().should.be.a('string');
    sex('test').should.be.a('string');
  });
});

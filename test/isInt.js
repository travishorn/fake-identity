var isInt = require('../src/isInt');

describe('isInt()', function() {
  'use strict';

  it('returns true for integers', function() {
    isInt(0).should.be.true;
    isInt(1).should.be.true;
    isInt(-1).should.be.true;
    isInt(Math.floor(Math.random() * 10000)).should.be.true;
  });

  it('returns false for non-integers', function() {
    isInt(1.5).should.be.false;
    isInt('a').should.be.false;
    isInt(null).should.be.false;
    isInt().should.be.false;
    isInt(undefined).should.be.false;
    isInt(true).should.be.false;
    isInt(false).should.be.false;
    isInt({object: true}).should.be.false;
    isInt([1, 2, 3]).should.be.false;
    isInt('1').should.be.false;
  });
});

var should = require('chai').should();
var randomIntInRange = require('../src/randomIntInRange');
var isInt = require('../src/isInt');

describe('randomIntInRange()', function () {
  'use strict';
  
  it('returns an integer', function () {
    isInt(randomIntInRange(0, 9999)).should.be.true;
  });
  
  it('returns an integer within specified range', function () {
    var i = 10,
      n;
    
    while (i) {
      n = randomIntInRange(0, 9999);

      n.should.be.above(-1);
      n.should.be.below(10000);
      
      i -= 1;
    }
  });
  
  it('accepts two integers', function () {
    randomIntInRange.bind(randomIntInRange, 'a', 9999).should.throw(Error);
    randomIntInRange.bind(randomIntInRange, 0, 'b').should.throw(Error);
  });
  
  it('expects min to be less than max', function () {
    randomIntInRange.bind(randomIntInRange, 0, 9999).should.not.throw(Error);
    randomIntInRange.bind(randomIntInRange, 9999, 0).should.throw(Error);
  });
});
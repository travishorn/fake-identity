var should = require('chai').should();
var randomInArray = require('../src/randomInArray');

describe('randomInArray()', function () {
  'use strict';
  
  var array = [1, 'a', { object: true }, true, [1, 2, 3]];
  
  it('should only accept arrays', function () {
    randomInArray.bind(randomInArray, array).should.not.throw(Error);
    randomInArray.bind(randomInArray, null).should.throw(Error);
  });
  
  it('should include a random member of the array', function () {
    var i = 5;
    
    while (i) {
      array.should.include(randomInArray(array));
      
      i -= 1;
    }
  });
});
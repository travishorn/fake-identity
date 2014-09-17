var should = require('chai').should();
var identity = require('../src/identity');

describe('identity', function () {
  'use strict';
  
  describe('generate()', function () {
    it('should return an object', function () {
      identity.generate().should.be.an('object');
    });
    
    it('should only accept positive numbers', function () {
      identity.generate(1).should.be.an('object');
      identity.generate.bind(identity, -1).should.throw(Error);
    });
    
    it('should return an array of objects if number > 1', function () {
      var objects = identity.generate(2);
      
      objects.should.be.an('array');
      objects[0].should.be.an('object');
    });
    
    it('should return an object with appropriate properties', function () {
      var object = identity.generate();
      
      object.should.have.ownProperty('firstName');
      object.should.have.ownProperty('lastName');
      object.should.have.ownProperty('phoneNumber');
      object.should.have.ownProperty('department');
      object.should.have.ownProperty('street');
      object.should.have.ownProperty('city');
      object.should.have.ownProperty('state');
      object.should.have.ownProperty('emailAddress');
      object.should.have.ownProperty('dateOfBirth');
    });
  });
});
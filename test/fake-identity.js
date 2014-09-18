var should = require('chai').should();
var identity = require('../src/fake-identity');

describe('identity', function () {
  'use strict';
  
  describe('generate()', function () {
    it('returns an object', function () {
      identity.generate().should.be.an('object');
    });
    
    it('only accepts positive numbers', function () {
      identity.generate(1).should.be.an('object');
      identity.generate.bind(identity, -1).should.throw(Error);
    });
    
    it('returns an array of objects if number > 1', function () {
      var objects = identity.generate(2);
      
      objects.should.be.an('array');
      objects[0].should.be.an('object');
    });
    
    it('returns an object with appropriate properties', function () {
      var object = identity.generate();
      
      object.should.have.ownProperty('firstName');
      object.should.have.ownProperty('lastName');
      object.should.have.ownProperty('emailAddress');
      object.should.have.ownProperty('phoneNumber');
      object.should.have.ownProperty('street');
      object.should.have.ownProperty('city');
      object.should.have.ownProperty('state');
      object.should.have.ownProperty('zipCode');
      object.should.have.ownProperty('dateOfBirth');
      object.should.have.ownProperty('sex');
      object.should.have.ownProperty('company');
      object.should.have.ownProperty('department');
    });
  });
});
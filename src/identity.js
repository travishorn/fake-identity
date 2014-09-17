var isInt = require('./isInt');
var firstName = require('./firstName.js');
var lastName = require('./lastName.js');
var phoneNumber = require('./phoneNumber');
var department = require('./department');
var street = require('./street');
var city = require('./city');
var state = require('./state');
var emailAddress = require('./emailAddress');
var dateOfBirth = require('./dateOfBirth');

var identity = (function () {
  'use strict';
  
  var Identity = function () {
    var identity = {};
    
    identity.firstName = firstName();
    identity.lastName = lastName();
    identity.phoneNumber = phoneNumber();
    identity.department = department();
    identity.street = street();
    identity.city = city();
    identity.state = state();
    identity.emailAddress = emailAddress(identity.firstName, identity.lastName);
    identity.dateOfBirth = dateOfBirth();
    
    return identity;
  };
  
  function generate(num) {
    if ((num && (!isInt(num) || num < 1)) || num === 0) {
      throw new Error(num + ' is not a positive integer.');
    }
    
    if (!num || num === 1) {
      return new Identity();
    } else {
      var identities = [],
        i;
      
      for (i = 0; i < num; i += 1) {
        identities.push(new Identity());
      }
      
      return identities;
    }
  }
  
  return {
    generate: generate
  };
}());

if (typeof module !== 'undefined') {
  module.exports = identity;
}

if (typeof window !== 'undefined') {
  window.Identity = identity;
}
var isInt = require('./isInt');
var sex = require('./sex');
var firstName = require('./firstName.js');
var lastName = require('./lastName.js');
var emailAddress = require('./emailAddress');
var phoneNumber = require('./phoneNumber');
var street = require('./street');
var city = require('./city');
var state = require('./state');
var zipCode = require('./zipCode');
var dateOfBirth = require('./dateOfBirth');
var company = require('./company');
var department = require('./department');

var identity = (function() {
  'use strict';

  var Identity = function() {
    var identity = {};

    identity.sex = sex();
    identity.firstName = firstName(identity.sex);
    identity.lastName = lastName();
    identity.emailAddress = emailAddress(identity.firstName, identity.lastName);
    identity.phoneNumber = phoneNumber();
    identity.street = street();
    identity.city = city();
    identity.state = state();
    identity.zipCode = zipCode(identity.state);
    identity.dateOfBirth = dateOfBirth();
    identity.company = company();
    identity.department = department();

    return identity;
  };

  function generate(num) {
    if ((num && (!isInt(num) || num < 1)) || num === 0) {
      throw new Error(num + ' is not a positive integer.');
    }

    if (!num || num === 1) {
      return new Identity();
    } else {
      var identities = [];
      var i;

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

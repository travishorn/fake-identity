var states = require('./states');

module.exports = function() {
  'use strict';

  // Percentage of US population in those states
  // Mapped 1:1 with the states array
  var popPercent = [
    0.2, 1.5, 0.9, 2.1, 12.1, 1.6, 1.2, 0.3, 6.1, 3.2, 0.4, 1.0, 0.5, 4.1, 2.1,
    0.9, 1.4, 1.5, 2.1, 1.9, 0.4, 3.2, 1.7, 1.9, 1.0, 0.3, 3.1, 0.2, 0.6, 0.4,
    2.8, 0.7, 0.9, 6.3, 3.7, 1.2, 1.2, 4.1, 0.3, 1.5, 0.3, 2.1, 8.3, 0.9, 2.6,
    0.2, 2.2, 1.8, 0.6, 0.2
  ];

  // Pick a random state, weighted by its population
  function randomInArrayByWeight (array, weight) {
    var ar  = [];
    var i;
    var sum = 0;
    var r = Math.random();

    for (i = 0; i < weight.length - 1; i++) {
      sum += (weight[i] / 100.0);
      ar[i] = sum;
    }

    for (i = 0; i < ar.length && r >= ar[i]; i++) {
      if (r < ar[i]) {
        return array[i];
      }
    }

    return array[i];
  }

  return randomInArrayByWeight(states, popPercent);
};

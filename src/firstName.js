var randomInArray = require('./randomInArray');

module.exports = function () {
  'use strict';
  
  // Equal number of male and female common first names
  var firstNames = ['Aaron', 'Aiden', 'Alexander', 'Andrew', 'Anthony',
                    'Benjamin', 'Brandon', 'Brayden', 'Caleb', 'Carter',
                    'Christian', 'Christopher', 'Daniel', 'David', 'Dylan',
                    'Elijah', 'Ethan', 'Evan', 'Gabriel', 'Gavin', 'Isaac',
                    'Isaiah', 'Jack', 'Jackson', 'Jacob', 'James', 'Jayden',
                    'John', 'Jonathan', 'Jordan', 'Joseph', 'Joshua', 'Julian',
                    'Landon', 'Liam', 'Logan', 'Lucas', 'Luke', 'Mason',
                    'Matthew', 'Michael', 'Nathan', 'Nicholas', 'Noah', 'Owen',
                    'Ryan', 'Samuel', 'Tyler', 'William', 'Wyatt', 'Aaliyah',
                    'Abigail', 'Addison', 'Alexis', 'Allison', 'Alyssa',
                    'Amelia', 'Anna', 'Ashley', 'Aubrey', 'Audrey', 'Ava',
                    'Avery', 'Brianna', 'Brooklyn', 'Camila', 'Charlotte',
                    'Chloe', 'Claire', 'Elizabeth', 'Ella', 'Emily', 'Emma',
                    'Evelyn', 'Gabriella', 'Grace', 'Hailey', 'Hannah',
                    'Isabella', 'Kaylee', 'Khloe', 'Layla', 'Leah', 'Lillian',
                    'Lily', 'Madison', 'Mia', 'Natalie', 'Nevaeh', 'Olivia',
                    'Riley', 'Samantha', 'Sarah', 'Savannah', 'Sofia', 'Sophia',
                    'Taylor', 'Victoria', 'Zoe', 'Zoey'];
  
  return randomInArray(firstNames);
};
var states = require('./states');
var randomInArray = require('./randomInArray');
var randomIntInRange = require('./randomIntInRange');
var pad = require('./pad');

module.exports = function (state) {
  'use strict';
  
  if (state) {
    var zipStartsWith = {
      'AL': ['35', '36'],
      'AK': ['995', '996', '997', '998', '999'],
      'AZ': ['85', '86'],
      'AR': ['71', '72'],
      'CA': ['90', '91', '92', '93', '94', '95', '96'],
      'CO': ['80', '81'],
      'CT': ['06'],
      'DE': ['197', '198', '199'],
      'FL': ['32', '33', '34'],
      'GA': ['30', '31'],
      'HI': ['967', '968'],
      'ID': ['83'],
      'IL': ['60', '61', '62'],
      'IN': ['46', '47'],
      'IA': ['50', '51', '52'],
      'KS': ['66', '67'],
      'KY': ['40', '41', '42'],
      'LA': ['70', '71'],
      'ME': ['039', '04'],
      'MD': ['206', '207', '208', '209', '21'],
      'MA': ['01', '02'],
      'MI': ['48', '49'],
      'MN': ['55', '56'],
      'MS': ['38', '39'],
      'MO': ['63', '64', '65'],
      'MT': ['59'],
      'NE': ['68', '690', '691', '692', '693'],
      'NV': ['889', '89'],
      'NH': ['00', '03'],
      'NJ': ['07', '08'],
      'NM': ['87', '88'],
      'NY': ['10', '11', '12', '13', '14'],
      'NC': ['27', '28'],
      'ND': ['58'],
      'OH': ['43', '44', '45'],
      'OK': ['73', '74'],
      'OR': ['97'],
      'PA': ['15', '16', '17', '18', '19'],
      'RI': ['028', '029'],
      'SC': ['29'],
      'SD': ['57'],
      'TN': ['37', '38'],
      'TX': ['75', '76', '77', '78', '79'],
      'UT': ['84'],
      'VT': ['05'],
      'VA': ['201', '22', '23', '24'],
      'VI': ['008'],
      'WA': ['98', '99'],
      'WV': ['247', '248', '249', '25', '26'],
      'WI': ['53', '54'],
      'WY': ['82', '831']
    };
    
    if (states.indexOf(state) === -1) {
      throw new Error(state + ' is not a valid state.');
    } else {      
      var zipPart1 = randomInArray(zipStartsWith[state]);
      
      var zipPart2 = randomIntInRange(0, 999);
      
      zipPart2 = pad(zipPart2, 3);
      
      return (zipPart1 + zipPart2).slice(0, 5);
    }
  } else {
    return '00000';
  }
};
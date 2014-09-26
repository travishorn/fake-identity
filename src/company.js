var randomInArray = require('./randomInArray');

module.exports = function() {
  'use strict';

  // Fictional company names. Most are taken from Microsoft
  var companies = [
    'A. Datum Corporation', 'AdventureWorks Cycles', 'Alpine Ski House',
    'Awesome Computers', 'Baldwin Museum of Science', 'Blue Yonder Airlines',
    'City Power & Light', 'Coho Vineyard', 'Coho Winery',
    'Coho Vineyard & Winery', 'Consolidated Messenger', 'Contoso Ltd.',
    'Contoso Bank', 'Contoso Pharmaceuticals', 'Electronic, Inc.',
    'Fabrikam, Inc.', 'Fourth Coffee', 'Graphic Design Institute',
    'Humongous Insurance', 'Itexamworld', 'LitWare Inc.', 'Lucerne Publishing',
    'Margie\'s Travel', 'Northridge Video', 'Northwind Traders',
    'Parnell Aerospace', 'ProseWare, Inc.', 'School of Fine Art',
    'Southbridge Video', 'StrikeStrike', 'TailSpin Toys', 'Tasmanian Traders',
    'The Phone Company', 'Trey Research Inc.', 'WingTip Toys',
    'Wide World Importers', 'Woodgrove Bank'
  ];

  return randomInArray(companies);
};

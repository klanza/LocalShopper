const ko = require('nekodb');

ko.connect({
  client: 'mongodb',
  url: 'mongodb://localhost:27017/localshopper',
});

module.exports = {
    Product: require('./product'),
    User: require('./user'),
  };

const ko = require("nekodb");

ko.connect({
  client: 'mongodb',
  url: process.env.MONGODB_URI || 'mongodb://localhost:27017/localshopper'
})

console.log(ko);

module.exports = {
    User: require("./user"),
    Product: require("./product")
  };

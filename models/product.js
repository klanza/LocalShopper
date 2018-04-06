const ko = require('nekodb');

const Product = ko.Model('Product', {
    productName: ko.String,
    sku: ko.String,
    upc: ko.String,
    serialNumber: ko.String,
    price: ko.Number,
    seller: ko.models.User,
    keywords: [ko.String]
});

module.exports = Product;

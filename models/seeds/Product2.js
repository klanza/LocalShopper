const ko = require('nekodb');

const Product2 = ko.models.Product.create({
    productName: 'Nintendo Switch with Gray Joy-Con',
    sku: '',
    upc: '045496590086',
    serialNumber: '',
    price: '275.99',
    seller: '2',
    keywords: ['game', 'console'],
});

Product2.save().catch((errors) => {
    console.log(errors);
    // errors will contain the password field,
    // since it doesn't contain a String as was required
});
